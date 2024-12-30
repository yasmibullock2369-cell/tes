@echo off
cd /d "%~dp0\app\config"
start /wait notepad.exe "data.ts"
git add -A
git commit -m "Update data.ts"
git push origin main --force
exit
