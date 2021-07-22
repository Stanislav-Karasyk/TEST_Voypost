import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  green: "#6D9B12",
  blue: "#4285F4",
  greyText: "#636363",
  greyBgBtn: "#E5E5E5",
  black: "#000000",
  white:"#FFFFFF",
  greyBg: "#EFEFEF",
};

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
      primary: {
        main: colors.green,
      },
      secondary: {
        main: colors.blue,
      },
    },

  overrides: {
    MuiButton: {
      root: {
        fontSize: 16,
        fontWeight: 900,
        textTransform: "capitalize",
        borderRadius: 6,
        width: 133,
        height: 50,

        marginLeft: defaultTheme.spacing(2.5),
        marginBottom: defaultTheme.spacing(3),
      },
      sizeLarge: {
        width: 270,
        height: 50,
        fontSize: 16,
      },
      sizeSmall: {
        width: 120,
        height: 40,
        fontSize: 16,
      },
      contained: {
        color: colors.greyText,
        backgroundColor: colors.greyBgBtn,
      },
    },
    MuiTypography: {
      h1: {
        fontSize: 36,
        fontWeight: 900,
      },
      h2: {
        fontSize: 32,
        fontWeight: 700,
      },
      h3: {
        fontSize: 28,
        fontWeight: 500,
      },
      h4: {
        fontSize: 24,
        fontWeight: 500,
      },
      h5: {
        fontSize: 18,
        fontWeight: 500,
      },
      h6: {
        fontSize: 16,
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: 14,
        fontWeight: 700,
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 300,
      },
    },
    MuiInputBase: {
      root:{
        marginBottom: defaultTheme.spacing(1)
      },
      input: {
        width: 550,
        backgroundColor: colors.greyBg,
        borderRadius: 6,
      },
    },
    
  },
});

export default theme;
