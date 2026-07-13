@echo off
set "PATH=C:\Users\calut\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
cd /d "%~dp0"
"C:\Users\calut\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" node_modules\vinext\dist\cli.js start --host 127.0.0.1 --port 3000
pause
