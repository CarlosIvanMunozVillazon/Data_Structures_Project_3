import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react";
import {Grid, IconButton, Stack } from "@mui/material";
import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import Image from "next/image"
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

import { TemporaryDrawer } from "./TemporaryDrawer";

type Anchor = 'left';

export const BasicNavbar: React.FC<{}> = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <>
            <Box sx={{ flexGrow: 1 }} alignItems="center">
                <AppBar position="sticky">
                    <Toolbar>
                        <Container maxWidth="xl">
                            <Grid
                                container
                                justifyContent="space-between"
                                direction="row"
                                alignItems="center"
                            >
                                <Grid item >
                                    <Stack direction="row" spacing={2}>
                                        <IconButton
                                            sx={{ color: "white" }}
                                            onClick={toggleDrawer("left", true)}>
                                            <MenuIcon></MenuIcon>
                                        </IconButton>
                                    <Image
                                        className="border-slate pb-8"
                                        src="/images/AppLogo2.png"
                                        width={50}
                                        height={40}
                                        alt="AppLogo2"
                                        priority={true}
                                    />
                                    <Typography variant="h4">SharpSight</Typography>
                                </Stack>
                            </Grid>

                            <Grid item >
                                <Stack direction="row" spacing={2}>
                                    <WbSunnyOutlinedIcon></WbSunnyOutlinedIcon>
                                    <PersonIcon></PersonIcon>
                                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <TemporaryDrawer setState={setState} toggleDrawer={toggleDrawer} state = {state}></TemporaryDrawer>
            </Box>
        </>
    )
}