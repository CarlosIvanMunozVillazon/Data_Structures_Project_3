"use client"
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { BasicNavbar } from "../components/BasicNavbar";
import React from 'react'

type basicLayoutProperties = {
    children: React.ReactNode
}

export function BasicLayout({ children }: basicLayoutProperties) {
    return (
        <>
            <BasicNavbar></BasicNavbar>
            {children}
        </>
    )
}

export default BasicLayout