declare var jsQR: typeof import("jsqr").default;
declare var Fingerprint2: typeof import("fingerprintjs2");


declare module QRCode {
  export enum CorrectLevel {
    L,
    M,
    Q,
    H
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
