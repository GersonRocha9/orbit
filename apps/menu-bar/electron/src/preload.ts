import { exposeElectronModules } from 'react-native-electron-modules';

import { PreloadModules } from '../modules/preloadRegistry';

if (process.env.WDIO_E2E === '1') {
  require('wdio-electron-service/preload');
}

exposeElectronModules(PreloadModules);
