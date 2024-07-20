import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    iconSize: {};
  }
  //   allow configuration using `createTheme`
  interface ThemeOptions {
    iconSize?: {};
  }
}

let theme = createTheme();
theme = responsiveFontSizes(theme);
theme = createTheme(theme, {
  iconSize: {
    sm: [theme.spacing(3)],
    md: [theme.spacing(3.5)],
    lg: [theme.spacing(4)],
  },
});

export { theme };
