
@echo off
setlocal

:: Remove "vscode-launcher://" from the input URL
set url=%1
set url=%url:vscode-launcher://=%

:: If no specific file/folder is provided, open the default Notes folder
if "%url%"=="" set url=C:\Users\Divyesh\Downloads\Notes

:: Check if the path is a directory
if exist "%url%\*" (
    echo Opening folder: %url%
    start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" "%url%"
) else (
    echo Opening file: %url%
    start "" "C:\Users\Divyesh\AppData\Local\Programs\Microsoft VS Code\Code.exe" --new-window "%url%"
)

endlocal
