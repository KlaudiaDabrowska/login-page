import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      textAndButton: string;
      border: string;
      hoverTextAndButton: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
      xxxs: string;
    };
    spacing: {
      xxxl: string;
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}

type FontSize = 'xxl' | 'xl' | 'l' | 'm';
