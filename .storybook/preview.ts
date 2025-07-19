import type { Decorator, Preview } from "@storybook/react";
import { withScreenshot } from "storycap";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    screenshot: {
      fullPage: true,
      captureBeyondViewport: false,
      delay: 100,
      viewports: {
        desktop: { width: 1920, height: 1080 },
        tablet: { width: 768, height: 1024 },
        mobile: { width: 360, height: 800, isMobile: true, hasTouch: true },
      },
    },
  },
  decorators: [withScreenshot as Decorator],
};

export default preview;
