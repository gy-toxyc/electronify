module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: '/styles/img/electronify.ico'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
        config: {
          options: {
          icon: '/styles/img/electronify.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: '/styles/img/electronify.icns'
      }
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: '/styles/img/electronify.ico'
      }
    }
  ],
};
