const {
  dialog,
  autoUpdater
} = require('electron');
const config = require('../app.config')();

async function applyUpdater(window) {
  /**
   * Apply configuration Settings
   */
  autoUpdater.setFeedURL(config.updateSettings.url);
  /**
   * Auto Update Events
   */
  autoUpdater.on(config.updateEvents.UPDATE_ERROR, () => {})
    .on(config.updateEvents.UPDATE_NOT_AVAILABLE, info => {
      dialog.showMessageBox(window, config.updateNotAvailableSettings);
    })
    .on(config.updateEvents.UPDATE_DOWNLOADED, (event, releaseNotes, releaseName) => {
      dialog.showMessageBox(window, config.updateDownloadedSettings, response => {
        if (response === 0) {
          setTimeout(() => autoUpdater.quitAndInstall(), 1);
        }
      });
    });
}

async function removeUpdateListeners() {
  autoUpdater.removeAllListeners();
}

function checkUpdates() {
  autoUpdater.checkForUpdates();
}

module.exports = {
  checkUpdates,
  applyUpdater,
  removeUpdateListeners
};