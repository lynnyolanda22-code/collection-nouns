@echo off
echo 正在推送代码到GitHub...
git push -u origin main
if %errorlevel% equ 0 (
    echo 推送成功！
) else (
    echo 推送失败，请检查身份验证
)
pause

