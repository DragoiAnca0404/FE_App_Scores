import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'FE_App_Scores',
  webDir: 'www',
  server: {
    cleartext: true,
    hostname: '192.168.1.134'
  }
  
};

export default config;