import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button";
import { Navbar } from "../components/Navbar"

import React, { ReactNode } from 'react'

type layoutProperties = {
    children: ReactNode
}

function TestLayout({ children }: layoutProperties) {
    return (
        <main>
            
            {children}
        </main>
    )
}

export default TestLayout