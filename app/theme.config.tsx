"use client"
import { createTheme, Paper, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children:JSX.Element;
}

export enum themePalette {
    BACKGROUND="#e3f2fd",
    BUTTON = "#000000",
    GLOBAL_TYPOGRAPHY = "'Lato'"
}

const theme = createTheme ({
    palette : {
        mode:"light",
        background : {
            default: themePalette.BACKGROUND
        },
        primary : { // para otros componentes
            main : themePalette.BUTTON
        }
    },
    typography : {
        fontFamily:themePalette.GLOBAL_TYPOGRAPHY,
    },
    components : {
        MuiButton : {
            defaultProps: {
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5em"
                    
                }
            }
        }
    }
});

export const ThemeConfig: React.FC <ThemeProp> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        {children}
    </ThemeProvider>
};