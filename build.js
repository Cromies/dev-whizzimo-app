const installer = require('electron-winstaller');

installer.createWindowsInstaller({
    appDirectory: './whizzimo-source/dist/win-unpacked/',
    outputDirectory: './whizzimo-installer/',
    authors: 'Whizzimo, LLC',
    exe: 'Whizzimo-Dev.exe',
    version: '1.0.2',
    title: 'Whizzimo Dev Desktop',
    name: 'whizzimo_dev',
    certificateFile: './whizzimo-source/certs/whizzimo.pfx',
    certificatePassword: 'Whizzardedu@7851',
    iconUrl: 'https://raw.githubusercontent.com/linuxguy467/whizzimo-app/master/icon.ico',
    setupIcon: './icon.ico',
    setupExe: 'Dev-Whizzimo-Setup.exe',
    noMsi: true,
    remoteReleases: 'https://edu.whizzimo.com/app/dev'
}).then(() => {
    console.log('Build Success');
}, (e) => {
    console.log(`Build Failed here's why: ${e.message}`);
});