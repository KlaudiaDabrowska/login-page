import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundPrimary: string;
      darkerBackgroundPrimary: string;
      textAndButton: string;
      navBorder: string;
      hoverTextAndButton: string;
      formBorder: string;
      buttonHover: string;
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
      xxxxl: string;
      xxxl: string;
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
      xxs: string;
    };
  }
}
