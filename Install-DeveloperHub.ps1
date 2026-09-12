$ErrorActionPreference = "Stop"

$ProjectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $ProjectPath

Write-Host "" 
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "     DEVELOPER HUB ONE-TIME SETUP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Updating DeveloperHub from GitHub..." -ForegroundColor Yellow
git pull --ff-only

Write-Host ""
Write-Host "Installing/updating dependencies..." -ForegroundColor Yellow
npm install

$DesktopPath = [Environment]::GetFolderPath("Desktop")
$ShortcutPath = Join-Path $DesktopPath "DeveloperHub.lnk"
$LauncherPath = Join-Path $ProjectPath "Launch-DeveloperHub.ps1"

$PowerShellPath = (Get-Command powershell.exe).Source

$WScriptShell = New-Object -ComObject WScript.Shell
$Shortcut = $WScriptShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = $PowerShellPath
$Shortcut.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$LauncherPath`""
$Shortcut.WorkingDirectory = $ProjectPath
$Shortcut.Description = "Launch DeveloperHub"
$Shortcut.IconLocation = "$env:SystemRoot\System32\shell32.dll,13"
$Shortcut.Save()

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host " SETUP COMPLETE" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "A DeveloperHub shortcut was created on your desktop." -ForegroundColor Green
Write-Host "Double-click DeveloperHub to launch it." -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to close"
