module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mypanda',
          name: 'electron-mp3-audioout-switch',
        }
      },
    },
  ],
  packagerConfig: {
    name: 'electron-audio-device-switch',
    executableName: 'electron-audio-device-switch',
    extraResource: ['./song.mp3'], // 静态文件
    // icon: './build/icon' // 不用加后缀，但是需要准备3个文件，win: icon.ico, mac: icon.icns, linux: icon.png，打包时自动识别，linux 在BrowserWindow构造参数中设置
    win32metadata: {
      ProductName: 'Js切换音频输入设备 Windows',
      CompanyName: 'mypanda.github.com',
      FileDescription: 'Js切换音频输入设备 for mypanda'
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
