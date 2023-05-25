import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";

import React from "react";
import Link from "next/link";

type NavbarProperties = {
    button1Direction: string;
    button2Direction: string
}

export const Navbar: React.FC<NavbarProperties> = ({ button1Direction, button2Direction }: NavbarProperties) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container sx = {{width : "100%"}}>
                        <Grid
                            container
                            justifyContent="space-between"
                            direction="row"
                            alignItems="center"
                        >
                            <Grid item >
                                <Typography variant = "h4">SharpSight</Typography>
                            </Grid>
                            <Grid item >
                                <Stack direction="row" spacing={2}>

                                    <Link href={button1Direction}>
                                        <Button variant="contained" >
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link href={button2Direction}>
                                        <Button variant="contained" >
                                            Register
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}