"use client"

import React from "react";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { apiWishList } from "@/app/api/wishList/wishList";
import { producto } from "../search/interface/product.interface";
import { apiOthers } from "@/app/api/otherss/others";
import { BaseForm } from "@/app/components/BaseForm";

export default function Other() {

    //Awating for response interface
    const handleSellers = () => {

        apiOthers.getSellers().then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const handleBrands = () => {

        apiOthers.getBrands().then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const [getBrandsSellers, setBrandSeller] = React.useState(
        {
            name: ''
        }
    )

    const handleBrandsSellers = () => {

        apiOthers.getBrandsAndSellers().then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }


    return <>

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
                    {/**Still need to show responses */}
                    <Grid item sx={{ width: "100%" }}>

                        <BaseForm title='Show sellers' children={
                            <>
                                <Button type='submit' variant='contained'>
                                    Query
                                </Button>
                            </>
                        }

                            children2={
                                <></>
                            }

                            children3={
                                <></>
                            }
                            submit={handleSellers}></BaseForm>

                    </Grid>

                    <Grid item sx={{ width: "100%" }}>

                        <BaseForm title='Show brands' children={
                            <>
                                <Button type='submit' variant='contained'>
                                    Query
                                </Button>
                            </>
                        }

                            children2={
                                <></>
                            }

                            children3={
                                <></>
                            }
                            submit={handleBrands}></BaseForm>

                    </Grid>

                    <Grid item sx={{ width: "100%" }}>

                        <BaseForm title='Filter by seller' children={
                            <>
                                <TextField name='name' placeholder="seller name" onChange={handleChgSeller}></TextField>
                            </>
                        }

                            children2={
                                <Button type='submit' variant='contained'>
                                    Filtrar
                                </Button>
                            }

                            children3={
                                <></>
                            }
                            submit={handleBrandsSellers}></BaseForm>

                    </Grid>

                </Grid>
            </Container>
        </BasicLayout>
    </>
}

