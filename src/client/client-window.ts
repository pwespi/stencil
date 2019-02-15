import * as d from '@declarations';
import { BUILD } from '@build-conditionals';


export const win = window as any;

export const doc = document;

export const plt: d.PlatformRuntime = {};

if (BUILD.taskQueue) {
  plt.queueCongestion = 0;
  plt.queuePending = false;
}

if (BUILD.shadowDom) {
  plt.supportsShadowDom = !!doc.documentElement.attachShadow;
}

if (BUILD.hostListener) {
  plt.supportsListenerOptions = false;
}

// if (BUILD.exposeAppRegistry) {
//   (win['s-apps'] = win['s-apps'] || []).push(BUILD.appNamespace);
// }
