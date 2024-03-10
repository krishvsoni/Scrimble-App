import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'scrimble.vercel.app',
  appName: 'scrimble-apk',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
