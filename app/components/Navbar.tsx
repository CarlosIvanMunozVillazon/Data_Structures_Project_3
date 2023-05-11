import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";

import React from "react";

export const Navbar: React.FC<{}> = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            justifyContent="space-between"
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item >
                                <Typography>SharpSight</Typography>
                            </Grid>
                            <Grid item >
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" >
                                        Log In
                                    </Button>
                                    <Button variant="contained">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}