"use client"
import { BasicNavbar } from "@/app/components/BasicNavbar";
import { SearchInput } from "@/app/components/SearchInput";
import { Button, Stack, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image"

export default function Search() {
    //1. insert grid component for aligning the elements.
    return <>
        <BasicNavbar></BasicNavbar>

        <Grid
            component="main"
            container
            alignItems="center"
            direction="column"
            justifyItems="center"
            spacing={5}
            sx={{ height: "100%", mt: 2, width : "100%"}}

        >

            <Grid
                item
            >
                <Image
                    className="border-slate pb-8"
                    src="/images/SearchImage1.png"
                    width={325}
                    height={275}
                    alt="AppLogo"
                    priority={true} />
            </Grid>


            <TextField placeholder="What are you looking for?" sx={{ width: "35%", height: "10%" , mt : 5}}></TextField>
            <Button variant="contained" sx={{ mt: 1.5, width: "12%" }}>Search</Button>

        </Grid>

    </>
}