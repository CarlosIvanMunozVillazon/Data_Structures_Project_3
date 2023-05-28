"use client"
import { createTheme, Paper, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children:JSX.Element;
}

export enum themePalette {
    BACKGROUND="#FFFFFF",
    BLUE_1 = "#0000FF",
    BLUE_2 = "#1A237E",
    BLACK = "#000000",
    GRAY_1 = "#212121",
    
    //Alert Colors:
    RED_1 = "#FF0033",
    PURPLE_1 = "#4A148C",
    GRAY_2 = "#E5E7E9",
    GREEN_1 = "#33FF00",

    GLOBAL_TYPOGRAPHY = "'Lato', italic",
}

const theme = createTheme ({
    palette : {
        mode:"light",
        background : {
            default: themePalette.BACKGROUND
        },
        primary : { // para otros componentes
            main : themePalette.BLUE_2
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
        },
        MuiAppBar : {
            defaultProps : {
                style:{
                    backgroundColor:themePalette.GRAY_1,
                    boxShadow : "none"
                }
            }
        },
        MuiAlert : { //There are different alert components, which we can customize
            defaultProps : {
                style : {
                    borderRadius : "0.8em",
                    fontSize : "1 em"
                }
            },
            styleOverrides : { //Allows pointing to specific component type "errors"
                standardError : { 
                    border : `1px solid ${themePalette.RED_1}`,
                    background : themePalette.GRAY_2
                } ,
                standardSuccess : {
                    border : `1px solid ${themePalette.GREEN_1}`,
                    background : themePalette.GRAY_2
                }
            }
        },
        MuiPaper : {
            defaultProps : {
                style : {
                    padding : "1.2em",
                    borderRadius: "0.5em" 
                }
            }
        }
    }
});

export const ThemeConfig: React.FC <ThemeProp> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
};