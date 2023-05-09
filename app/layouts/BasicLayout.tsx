import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { BasicNavBar } from "../components/BasicNavBar";

import React from 'react'

type basicLayoutProperties = {
    children: React.ReactNode
}

function BasicLayout({ children }: basicLayoutProperties) {
    return (
        <main>
            <BasicNavBar></BasicNavBar>
            {children}
        </main>
    )
}

export default BasicLayout