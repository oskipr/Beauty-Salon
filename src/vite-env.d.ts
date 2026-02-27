/// <reference types="vite/client" />

interface Calendly {
  initPopupWidget(options: { url: string }): void;
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}
