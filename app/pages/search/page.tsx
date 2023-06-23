"use client"
import { apiProducts } from "@/app/api/products/product";
import { BasicNavbar } from "@/app/components/BasicNavbar";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image"
import React from "react";
import { ProductInterface } from "../../interface/Product.interface";
import { BaseCard } from "@/app/components/BaseCard";
import BasicLayout from "@/app/layouts/BasicLayout";

//1. declare type of thing we want to search.
type searchedItem = {
    itemName: string
}


export default function Search() {

    //2. use our "useState" hook for stablishing where and how are we going to store our fetched data.
    const [items, setItems] = React.useState<ProductInterface[] | null>(null);


    //3. use again our "useState" hook for declaring where and how are we storing the data from the search input.
    const [productName, setProductName] = React.useState<searchedItem>({
        itemName: ""
    });
    //here we destructure our object type and give him a default value.


    //4. then we use a function for getting info about the change event that ocurrs within the input element, to setUp our searchedObject.
    const newItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductName({
            //"..." allows us keeping the info previously registered by other text fields.
            ...productName, [e.target.name]: e.target.value
        }
        )
    }

    //5. now we write a functions that receives as a parameter  the name of the item that we want to search for. Within it we will find functions that hit the API endpoint in some way.
    const searchProduct = (name: string) => {

        apiProducts.searchProducts(name).then((response) => {
            setItems(response.data)
        }).catch((Error) => {
            console.error(Error)
        })
    }

    //6. here we handle de submit event of the search form below. We prevent it's default behavior, and then we proceed to search for the elements by calling the searchProduct function.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        searchProduct(productName.itemName)

    }


    return <>
        {/*<BasicNavbar></BasicNavbar>*/}

        <BasicLayout>

            <Container component="main">
                <Grid
                    component="div"
                    container
                    alignItems="center"
                    direction="column"
                    justifyContent="center"
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


                    <Grid item sx={{ width: "50%" }}>

                        <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>

                            <Stack direction="column" alignItems="center" spacing={2}>
                                <TextField sx={{ width: "70%" }} name="itemName" placeholder="What are you looking for?"
                                    onChange={newItem}></TextField>
                                <Button type="submit" variant="contained" size="small" sx={{ width: "25%" }}>Search</Button>
                            </Stack>

                        </Box>
                    </Grid>

                    {
                        items !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                            <Grid container
                                component="div"
                                justifyContent="center"
                                alignItems="center"
                                direction="row"
                                spacing={1}
                                sx={{ height: "100%" }}>

                                {
                                    items!.map((article) => (
                                        <Grid item xs={3}>
                                            <BaseCard title={article.titulo}
                                                link={article.link} price={article.precio}
                                                store={article.tienda} />
                                        </Grid>
                                    ))

                                }
                            </Grid>

                        ) :

                            <Grid container
                                component="div"
                                justifyContent="center"
                                alignItems="center"
                                direction="row"
                                spacing={1}
                                sx={{ height: "100%" }}>
                                <Grid item >
                                    <Typography variant="caption">No elements found</Typography>
                                </Grid>
                            </Grid>

                    }

                </Grid>
            </Container>
        </BasicLayout>


    </>
}