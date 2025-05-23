// src/registerSW.js
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    // Add logic if needed
  },
  onOfflineReady() {
    // Add logic if needed
  },
});
