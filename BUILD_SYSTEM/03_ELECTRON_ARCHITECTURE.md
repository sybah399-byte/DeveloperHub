\# DeveloperHub Electron Architecture



Version: 1.0



\---



\# Purpose



Electron provides the secure bridge between the React frontend and the Windows operating system.



React must NEVER directly access Node.js APIs.



All operating system functionality must pass through Electron IPC.



\---



\# Architecture



React UI



↓



Frontend Service



↓



window.electronAPI



↓



preload.js



↓



ipcRenderer.invoke()



↓



ipcMain.handle()



↓



commands.js



↓



PowerShell / Node.js



↓



Windows



\---



\# File Responsibilities



\## main.js



Responsibilities



\- Create application windows

\- Register IPC handlers

\- Manage Electron lifecycle

\- Configure BrowserWindow

\- Handle application startup

\- Handle shutdown



main.js must never contain business logic.



\---



\## preload.js



Responsibilities



Expose secure APIs to React.



Every function should call ipcRenderer.invoke().



Example pattern



runCommand()



↓



ipcRenderer.invoke()



↓



run-command



↓



main.js



\---



\## commands.js



Responsibilities



Business logic.



Examples



Run terminal commands



Git operations



File operations



Project scanning



Backups



Templates



Automation



Never place React code inside commands.js.



\---



\# IPC Naming Convention



Every IPC channel should use kebab-case.



Examples



run-command



scan-project



git-status



git-add



git-commit



backup-project



restore-backup



ai-chat



plugin-install



\---



\# Function Flow



Every feature requiring Windows access follows:



React



↓



electronAPI



↓



IPC



↓



Command



↓



Result



Never skip a layer.



\---



\# Return Format



Every command should return a consistent object.



Example



{

&#x20;   success: true,

&#x20;   output: "...",

&#x20;   error: ""

}



If an operation fails



{

&#x20;   success: false,

&#x20;   output: "",

&#x20;   error: "Message"

}



Never reject promises unless absolutely necessary.



Return structured results.



\---



\# Security Rules



Enable:



contextIsolation



Disable:



nodeIntegration



React must access Node only through preload.js.



Never expose unnecessary Electron APIs.



\---



\# PowerShell



DeveloperHub is Windows-first.



Automation should prefer PowerShell.



Examples



git



npm



pnpm



node



explorer



code



powershell



\---



\# Error Handling



Every command should



Catch exceptions.



Return readable errors.



Never crash Electron.



Log unexpected failures.



\---



\# Logging



Future versions should support



Application log



Command log



Git log



Automation log



AI log



Logs should be stored separately.



\---



\# Testing



Every IPC command should be tested independently.



The React interface should not duplicate backend logic.



\---



\# Rule



If React needs operating system access



↓



Create command



↓



Register IPC



↓



Expose preload API



↓



Call from React



↓



Return structured result

