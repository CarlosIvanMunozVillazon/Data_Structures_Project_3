import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import React from "react";

export const BasicNavBar: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }} alignItems="center">
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Typography fontSize="30px" variant="h1">SharpSight</Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}