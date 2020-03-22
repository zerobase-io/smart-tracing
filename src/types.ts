declare var jsQR: typeof import('jsqr').default;
declare var Fingerprint2: typeof import('fingerprintjs2');

interface Point {
  x: number;
  y: number;
}

type RuntimeConfig = {
  API_HOST: string;
  ENV: 'dev' | 'prod';
};

declare module QRCode {
  export enum CorrectLevel {
    L,
    M,
    Q,
    H,
  }
}

interface QRCodeOption {
  text?: string;
  width?: number;
  height?: number;
  colorDark?: string;
  colorLight?: string;
  correctLevel?: QRCode.CorrectLevel;
}

declare class QRCode {
  constructor(el: HTMLElement | String, vOption?: String | QRCodeOption);
  makeCode(sText: string): void;
  makeImage(): void;
  clear(): void;
}

type RequestIdleCallbackHandle = any;
type RequestIdleCallbackOptions = {
  timeout: number;
};
type RequestIdleCallbackDeadline = {
  readonly didTimeout: boolean;
  timeRemaining: () => number;
};

declare interface Window {
  requestIdleCallback: (
    callback: (deadline: RequestIdleCallbackDeadline) => void,
    opts?: RequestIdleCallbackOptions,
  ) => RequestIdleCallbackHandle;
  cancelIdleCallback: (handle: RequestIdleCallbackHandle) => void;
}
