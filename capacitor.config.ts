import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'MyApp',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    allowNavigation: [
      "https://your-backend-url.com",
      "http://localhost:8100",
      "capacitor://localhost"
    ]
  }
};

export default config;