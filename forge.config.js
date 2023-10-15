module.exports = {
  packagerConfig: {
    icon: './style/img/electronify.ico'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: './styles/img/electronify.ico'
      },
    },
    {
      name: '@electron-forge/maker-deb',
        config: {
          options: {
          icon: './styles/img/electronify.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './styles/img/electronify.icns'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux', 'win32'],
    },
  ],
};
