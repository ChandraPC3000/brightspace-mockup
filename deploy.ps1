# Deploy ulang mockup ke GitHub Pages
# Pakai: klik kanan > Run with PowerShell, atau:  powershell -ExecutionPolicy Bypass -File .\deploy.ps1

$src = "F:\benchmark-nfr\mockups"
$dst = Join-Path $env:TEMP "brightspace-deploy"
$repo = "https://github.com/ChandraPC3000/brightspace-mockup.git"

if (-not (Test-Path $dst)) {
  git clone $repo $dst
}

# salin perubahan (tanpa .git, tanpa screenshot preview)
robocopy $src $dst /MIR /XD ".git" /XF "preview-*.png" /NFL /NDL /NJH /NJS /NP | Out-Null

Set-Location $dst
git add -A

$changes = git status --porcelain
if (-not $changes) {
  Write-Host "Tidak ada perubahan." -ForegroundColor Yellow
  exit 0
}

git -c user.name="ChandraPC3000" -c user.email="ChandraPC3000@users.noreply.github.com" `
    commit -m "Update mockup $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push

Write-Host ""
Write-Host "Selesai. GitHub Pages akan rebuild otomatis (~30-60 detik)." -ForegroundColor Green
Write-Host "https://chandrapc3000.github.io/brightspace-mockup/" -ForegroundColor Cyan
