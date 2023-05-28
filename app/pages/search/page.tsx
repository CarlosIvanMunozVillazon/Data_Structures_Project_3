"use client"
import { products } from "@/app/api/product";
import { BasicNavbar } from "@/app/components/BasicNavbar";
import { SearchInput } from "@/app/components/SearchInput";
import { Box, Button, Stack, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image"
import React from "react";
import { ProductInterface } from "../products/interface/Product.interface";

export default function Search() {
    //1. insert grid component for aligning the elements.

    const [prod, setProd] = React.useState<ProductInterface[] | null>(null);

    const searchName = (name: string) => {

        products.getByName(name).then((r) => {
            setProd(r.data)
        }).catch((Error) => {
            console.error(Error)
        })
    }

    React.useEffect(() => {
        searchName("iphone")
    }, [])

    //const [searchData, setSearchData] = React.useState<string>("");

    // const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        
    //     searchName();
    // }

    console.log(prod)

    return <>
        <BasicNavbar></BasicNavbar>

        <Grid
            component="main"
            container
            alignItems="center"
            direction="column"
            justifyItems="center"
            spacing={5}
            sx={{ height: "100%", mt: 2, width: "100%" }}

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


            <Box component = "form" >
                <TextField placeholder="What are you looking for?" sx={{ width: "35%", height: "10%", mt: 5 }}></TextField>
                <Button type="submit" variant="contained" sx={{ mt: 1.5, width: "12%" }}>Search</Button>
            </Box>

        </Grid>

    </>
}