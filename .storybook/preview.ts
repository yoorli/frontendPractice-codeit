import '../src/app/globals.css';

import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // 전체 스토리에 배경 설정
    backgrounds: {
      options: {
        red: {
          name: 'red',
          value: 'red',
        },
        blue: {
          name: 'blue',
          value: 'blue',
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
