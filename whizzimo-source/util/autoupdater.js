const {
  dialog,
  autoUpdater
} = require('electron');
const config = require('../app.config')();

async function applyUpdater() {
  /**
   * Apply configuration Settings
   */
  autoUpdater.setFeedURL(config.updateSettings.url);
  /**
   * Auto Update Events
   */
  autoUpdater.on(config.updateEvents.UPDATE_ERROR, () => {})
    .on(config.updateEvents.UPDATE_NOT_AVAILABLE, info => {})
    .on(config.updateEvents.UPDATE_DOWNLOADED, (event, releaseNotes, releaseName) => {
      dialog.showMessageBox({
        type: 'info',
        title: config.updateDialogsSettings.title,
        message: config.updateDialogsSettings.messages.finished_message,
        buttons: config.updateDialogsSettings.buttons.down_diag
      }, response => {
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