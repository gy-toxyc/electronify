const path = require('path');

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, "electron_base/icon")
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        "name": "Electronify",
        "setupIcon": path.join(__dirname, "electron_base/icon.ico")
      }
    },
    {
      name: '@electron-forge/maker-deb',
        config: {
          options: {
          icon: path.join(__dirname, "electron_base/icon.png")
        }
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: path.join(__dirname, "electron_base/icon.icns")
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    },
  ],
};
