import {Button, Grid, TextField } from "@mui/material";
import React from "react";

type SearchInputProperties = {
    inputPlaceHolder ?: string,
    searchText ?: string,

}

export const SearchInput : React.FC <SearchInputProperties> = ({inputPlaceHolder, searchText} : SearchInputProperties) => {
    return <>
        <Grid container component = "div" direction = "row" display = "flex" flexDirection="column">
            <Grid item xs = {9}>
                <TextField fullWidth variant = "outlined" placeholder={inputPlaceHolder}/>
            </Grid>

            <Grid item xs = {3}>
                <Button variant = "contained">{searchText}</Button>
            </Grid>
        </Grid>
    </>
}