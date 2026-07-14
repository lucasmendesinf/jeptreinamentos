$ErrorActionPreference = "Stop"

$root = "C:\xampp\htdocs\jeptreinamentos"
$publicDir = Join-Path $root "public"
$galleryDir = Join-Path $publicDir "gallery-optimized"

Add-Type -AssemblyName System.Drawing

function Save-JpegOptimized {
  param(
    [Parameter(Mandatory = $true)][string] $Source,
    [Parameter(Mandatory = $true)][string] $Target,
    [Parameter(Mandatory = $true)][int] $MaxWidth,
    [Parameter(Mandatory = $true)][int] $MaxHeight,
    [Parameter(Mandatory = $true)][long] $Quality
  )

  if (!(Test-Path -LiteralPath $Source)) {
    return
  }

  $image = [System.Drawing.Image]::FromFile($Source)
  try {
    $scale = [Math]::Min($MaxWidth / $image.Width, $MaxHeight / $image.Height)
    if ($scale -gt 1) { $scale = 1 }

    $width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
    $height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))

    $bitmap = New-Object System.Drawing.Bitmap($width, $height)
    try {
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.Clear([System.Drawing.Color]::White)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($image, 0, 0, $width, $height)
      }
      finally {
        $graphics.Dispose()
      }

      $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" } | Select-Object -First 1
      $encoder = [System.Drawing.Imaging.Encoder]::Quality
      $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
      $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, $Quality)
      $bitmap.Save($Target, $codec, $parameters)
      $parameters.Dispose()
    }
    finally {
      $bitmap.Dispose()
    }
  }
  finally {
    $image.Dispose()
  }
}

function Copy-PublicFileToRoot {
  param([Parameter(Mandatory = $true)][string] $Name)
  $source = Join-Path $publicDir $Name
  if (Test-Path -LiteralPath $source) {
    Copy-Item -LiteralPath $source -Destination (Join-Path $root $Name) -Force
  }
}

function Remove-IfExists {
  param([Parameter(Mandatory = $true)][string] $Path)
  if (Test-Path -LiteralPath $Path) {
    Remove-Item -LiteralPath $Path -Force
  }
}

Save-JpegOptimized -Source (Join-Path $publicDir "hero-fire-prevention.png") -Target (Join-Path $publicDir "hero-fire-prevention.jpg") -MaxWidth 1800 -MaxHeight 950 -Quality 76
Save-JpegOptimized -Source (Join-Path $publicDir "og.png") -Target (Join-Path $publicDir "og.jpg") -MaxWidth 1200 -MaxHeight 630 -Quality 76
Save-JpegOptimized -Source (Join-Path $publicDir "logo-jp.png") -Target (Join-Path $publicDir "logo-jp.jpg") -MaxWidth 420 -MaxHeight 240 -Quality 82

foreach ($file in @("hero-fire-prevention.jpg", "og.jpg", "logo-jp.jpg", "favicon.ico", "favicon.png", "favicon-32x32.png", "apple-touch-icon.png", "favicon.svg", "file.svg", "globe.svg", "window.svg")) {
  Copy-PublicFileToRoot $file
}

$targetGallery = Join-Path $root "gallery-optimized"
if (Test-Path -LiteralPath $galleryDir) {
  if (Test-Path -LiteralPath $targetGallery) {
    Remove-Item -LiteralPath $targetGallery -Recurse -Force
  }
  Copy-Item -LiteralPath $galleryDir -Destination $targetGallery -Recurse -Force
}

foreach ($dir in @($root, $publicDir)) {
  Get-ChildItem -LiteralPath $dir -File | Where-Object {
    ($_.Name -match '^(servico|galeria|gallery)-.*\.(jpg|jpeg|png)$') -or
    ($_.Name -in @("hero-fire-prevention.png", "hero-fire-prevention.webp", "og.png", "logo-jp.png", "logo-jp.webp"))
  } | ForEach-Object {
    Remove-Item -LiteralPath $_.FullName -Force
  }
}

$total = Get-ChildItem -LiteralPath $root -Recurse -File |
  Where-Object { $_.FullName -notmatch '\\node_modules\\|\\.pnpm-store\\|\\.git\\|\\.next\\|\\.vinext\\|\\dist\\|\\build\\|\\.wrangler\\' } |
  Measure-Object -Property Length -Sum

"Arquivos do site sem dependencias/build: {0:N2} MB" -f ($total.Sum / 1MB)
