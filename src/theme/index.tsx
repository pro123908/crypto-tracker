import React, { FC, useMemo } from "react";
import { CssBaseline, PaletteMode, ThemeOptions } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useThemeSwitch } from "../hooks/switchTheme";
import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    smd: true;
    md: true;
    lg: true;
    xl: true;
    mobile: false;
    tablet: false;
    laptop: false;
    desktop: false;
  }

  interface Palette {
    regular: Palette["primary"];
  }
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 992,
      md: 1152,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#fff",
          },
          background: {
            default: "linear-gradient(0deg, #0F051F, #0F051F)",
            paper: "#0C031A",
          },
          text: {
            primary: "#fff",
            secondary: "#141414",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#0c031a",
            light: "#190a30",
            dark: "#080113",
          },
          background: {
            default: "linear-gradient(0deg, #0F051F, #0F051F)",
            paper: "#0C031A",
          },
          text: {
            primary: "#fff",
            secondary: "gray",
          },
        }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "#9247FF",
          color: "#FFFFFF",
          ":hover": {
            background: "#9247FF",
            color: "#FFFFFF",
          },
          height: 50,
          ":disabled": {
            background: "#2F2A3C",

            color: "#FFFFFF",
          },
        },

        outlined: {
          border: "1px solid #FFFFF",
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        filled: {
          background: "rgba(255, 255, 255, 0.11)",
          textTransform: "uppercase",
        },
      },
    },

    MuiTypography: {
      // specify font

      styleOverrides: {
        h5: {
          fontSize: "16px",
        },
        h6: {
          fontSize: "14px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: "1px solid #FFFFFF",
        },
      },
    },
  },

  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },

  spacing: 4,
  // zIndex: {
  //   appBar: 1200,
  //   drawer: 1100,
  // },
});

type ThemeProps = {
  children: React.ReactNode; //👈 children prop typr
};

const MuiTheme = ({ children }: ThemeProps) => {
  const [mode] = useThemeSwitch();

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode as PaletteMode)),
    [mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MuiTheme;
