$ErrorActionPreference = "Stop"

$root = "C:\xampp\htdocs\jeptreinamentos"
$nodePath = "C:\Users\calut\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$routes = @(
  "",
  "sobre",
  "treinamentos",
  "servicos",
  "normas-regulamentadoras",
  "contato",
  "politica-de-privacidade",
  "termos-de-cookies",
  "termos-de-uso"
)

function Sync-BuildAssets {
  $sourceAssets = Join-Path $root "dist\client\assets"
  $targetAssets = Join-Path $root "assets"

  if (!(Test-Path -LiteralPath $sourceAssets)) {
    return
  }

  if (!(Test-Path -LiteralPath $targetAssets)) {
    New-Item -ItemType Directory -Path $targetAssets | Out-Null
  }

  Get-ChildItem -LiteralPath $sourceAssets -File | Copy-Item -Destination $targetAssets -Force
}

function Sync-PublicAssets {
  $publicGallery = Join-Path $root "public\gallery-optimized"
  $targetGallery = Join-Path $root "gallery-optimized"

  if (Test-Path -LiteralPath $publicGallery) {
    if (Test-Path -LiteralPath $targetGallery) {
      Remove-Item -LiteralPath $targetGallery -Recurse -Force
    }

    Copy-Item -LiteralPath $publicGallery -Destination $targetGallery -Recurse -Force
  }

  $publicFiles = @(
    "favicon.ico",
    "favicon.png",
    "favicon-32x32.png",
    "apple-touch-icon.png"
  )

  foreach ($file in $publicFiles) {
    $source = Join-Path $root "public\$file"
    if (Test-Path -LiteralPath $source) {
      Copy-Item -LiteralPath $source -Destination (Join-Path $root $file) -Force
    }
  }
}

function Start-LocalRenderer {
  $process = Start-Process `
    -FilePath "cmd.exe" `
    -ArgumentList "/c", "set PATH=$nodePath;%PATH% && .\node_modules\.bin\vinext.cmd start --host 127.0.0.1 --port 4175 > vinext-export.log 2> vinext-export.err.log" `
    -WorkingDirectory $root `
    -WindowStyle Hidden `
    -PassThru
  Start-Sleep -Seconds 4
  return $process
}

function Stop-RendererOnPort {
  $connections = Get-NetTCPConnection -LocalPort 4175 -State Listen -ErrorAction SilentlyContinue
  foreach ($connection in $connections) {
    Stop-Process -Id $connection.OwningProcess -Force -ErrorAction SilentlyContinue
  }
}

function Fix-LocalPaths([string] $html) {
  $html = $html -replace 'href="/assets/', 'href="/jeptreinamentos/assets/'
  $html = $html -replace 'src="/assets/', 'src="/jeptreinamentos/assets/'
  $html = $html -replace 'import\("/assets/', 'import("/jeptreinamentos/assets/'
  $html = $html -replace 'href="/(sobre|treinamentos|servicos|normas-regulamentadoras|contato|politica-de-privacidade|termos-de-cookies|termos-de-uso)(["/#?])', 'href="/jeptreinamentos/$1$2'
  $html = $html -replace 'src="/(servico-[^"]+)"', 'src="/jeptreinamentos/$1"'
  $html = $html -replace 'href="/(servico-[^"]+)"', 'href="/jeptreinamentos/$1"'
  $html = $html -replace 'as="image" href="/(servico-[^"]+)"', 'as="image" href="/jeptreinamentos/$1"'
  return $html
}

function Fix-AssetReferences([string] $html) {
  $assetDir = Join-Path $root "assets"
  $matches = [regex]::Matches($html, "/jeptreinamentos/assets/([^""' >]+)")

  foreach ($match in $matches) {
    $fileName = $match.Groups[1].Value
    $assetPath = Join-Path $assetDir $fileName
    if (Test-Path -LiteralPath $assetPath) {
      continue
    }

    if ($fileName -match "^(?<prefix>.+)-[^-]+(?<ext>\.(css|js))$") {
      $prefix = $Matches["prefix"]
      $extension = $Matches["ext"]
      $replacement = Get-ChildItem -LiteralPath $assetDir -File -Filter "$prefix-*$extension" | Select-Object -First 1
      if ($replacement) {
        $html = $html.Replace($fileName, $replacement.Name)
      }
    }
  }

  return $html
}

function Write-HtmlFile([string] $target, [string] $html) {
  for ($attempt = 1; $attempt -le 5; $attempt++) {
    try {
      [System.IO.File]::WriteAllText($target, $html, [System.Text.UTF8Encoding]::new($false))
      return
    }
    catch [System.IO.IOException] {
      if ($attempt -eq 5) {
        throw
      }
      Start-Sleep -Milliseconds 350
    }
  }
}

Sync-BuildAssets
Sync-PublicAssets
Stop-RendererOnPort
$renderer = Start-LocalRenderer

try {
  foreach ($route in $routes) {
    $url = if ($route -eq "") { "http://127.0.0.1:4175/" } else { "http://127.0.0.1:4175/$route" }
    $tmpName = if ($route -eq "") { "home" } else { $route -replace "/", "-" }
    $tmp = Join-Path $env:TEMP "jep-export-$tmpName.html"

    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $tmp
    $item = Get-Item -LiteralPath $tmp
    if ($item.Length -lt 10000) {
      throw "HTML exportado vazio para $route"
    }

    $html = [System.Text.Encoding]::UTF8.GetString([System.IO.File]::ReadAllBytes($tmp))
    $html = Fix-LocalPaths $html
    $html = Fix-AssetReferences $html

    $targetDir = if ($route -eq "") { $root } else { Join-Path $root $route }
    if (!(Test-Path -LiteralPath $targetDir)) {
      New-Item -ItemType Directory -Path $targetDir | Out-Null
    }

    $target = Join-Path $targetDir "index.html"
    Write-HtmlFile $target $html
    Write-Output "exported $route $($item.Length)"
  }
}
finally {
  Stop-RendererOnPort
  if ($renderer -and !$renderer.HasExited) {
    Stop-Process -Id $renderer.Id -Force -ErrorAction SilentlyContinue
  }
}
