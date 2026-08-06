\# DeveloperHub Project Structure



Version: 1.0



\---



\# Root



DeveloperHub/



Contains the complete desktop application.



\---



\# BUILD\_SYSTEM/



Contains the permanent architecture documents.



This folder defines how every future module is generated.



Nothing inside BUILD\_SYSTEM should contain application code.



\---



\# electron/



Electron backend.



Contents:



main.js



preload.js



commands.js



Responsibilities:



Window management



IPC



Operating system access



PowerShell execution



Git commands



File system



AI process launching



Application lifecycle



\---



\# src/



React application.



Contains all frontend code.



\---



\# src/pages/



Entire application pages.



Examples:



Dashboard



Projects



Automation



Terminal



Git



AI



Settings



Notes



Plugins



Backups



Templates



Package Manager



Release Manager



Documentation



\---



\# src/components/



Reusable UI components.



Examples:



Sidebar



TopBar



Cards



Buttons



Dialogs



Tables



Forms



Progress bars



Status badges



Project cards



AI widgets



\---



\# src/layouts/



Application layouts.



Examples:



MainLayout



SettingsLayout



WizardLayout



\---



\# src/services/



Frontend services.



Responsibilities:



Calling Electron APIs



Data processing



Formatting



Project scanning



Automation helpers



Settings management



Backup helpers



\---



\# src/types/



Shared TypeScript interfaces.



Examples:



Project



Git



Automation



Settings



Plugin



AI



\---



\# src/styles/



CSS files.



One CSS file per feature whenever practical.



\---



\# src/assets/



Images



Icons



Logos



Fonts



Illustrations



\---



\# src/hooks/



Reusable React hooks.



Examples:



useProjects



useSettings



useTerminal



useGit



\---



\# src/database/



Frontend database helpers.



SQLite interfaces.



Caching.



\---



\# docs/



Documentation.



Examples:



Project status



Release notes



Architecture



Developer guides



\---



\# backups/



Automatic project backups.



Timestamped restore points.



\---



\# plugins/



Installed DeveloperHub plugins.



Each plugin should contain:



Manifest



Commands



Assets



Documentation



\---



\# templates/



Project templates.



Examples:



React



Electron



React Native



Expo



Node



Python



CLI



\---



\# scripts/



Automation scripts.



PowerShell only.



Examples:



Build



Backup



Restore



Release



Package



Deploy



\---



\# Rules



Every feature must have:



A page if user-facing.



A service if business logic exists.



Types if shared data exists.



Styles if visual.



Electron integration if operating system access is required.



Documentation if the feature introduces new functionality.



\---



\# Dependency Direction



Pages



↓



Components



↓



Services



↓



Electron API



↓



IPC



↓



Electron Main



↓



Commands



↓



Windows



Dependencies should never flow in the opposite direction.

