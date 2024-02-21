import { Theme as MuiTheme } from "@mui/material/styles";

declare module "@emotion/react" {
  export interface Theme extends MuiTheme {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    background: true;
    subtext: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    subtext: string;
  }
}
