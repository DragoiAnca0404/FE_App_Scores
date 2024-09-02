import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'FE_App_Scores',
  webDir: 'www',
  server: {
    cleartext: true,  // Allow HTTP traffic if using http
    hostname: '192.168.1.134',  // IP address of your backend server
    androidScheme: 'https',  // Use 'https' if your backend is HTTPS
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,  // Enable HTTP plugin if using Capacitor HTTP
    },
  },
};

export default config;
