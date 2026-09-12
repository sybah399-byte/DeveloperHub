$ErrorActionPreference = "Stop"

$ProjectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectPath

Write-Host "" 
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "        DEVELOPER HUB LAUNCHER" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Free the DeveloperHub development port if an old Vite process is still using it.
$connections = Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue
foreach ($connection in $connections) {
    try {
        Stop-Process -Id $connection.OwningProcess -Force -ErrorAction SilentlyContinue
    } catch {
        # Ignore processes that have already exited.
    }
}

# Close an old DeveloperHub Electron process if one is still running.
Get-Process electron -ErrorAction SilentlyContinue |
    Stop-Process -Force -ErrorAction SilentlyContinue

if (-not (Test-Path "$ProjectPath\node_modules")) {
    Write-Host "Installing DeveloperHub dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "Starting DeveloperHub..." -ForegroundColor Green
Write-Host ""

npm run devhub
