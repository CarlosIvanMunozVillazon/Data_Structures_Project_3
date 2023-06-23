"use client"
import { products } from "@/app/api/products/product";
import BasicLayout from "@/app/layouts/BasicLayout";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ProductInterface } from "../../interface/Product.interface";
import { BaseCard } from "@/app/components/BaseCard";

export default function Products() {


    const [getProducts, setGetProducts] = React.useState<ProductInterface[] | null>(null);



    const bringData = () => {

        products.getAll().then((r) => {
            setGetProducts(r.data)
        }).catch((Error) => {
            console.error(Error)
        })

    }




    return <>
        <BasicLayout>

            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="row"
                sx={{ width: "100%" }}
            >

                <TextField sx={{ width: "60%", mt: 5 }} placeholder="What are you looking for?"></TextField>
                <Button
                    variant="contained"
                    sx={{ height: "100%", mx: 3, mt: 5 }}
                    onClick={bringData}>Search</Button>




            </Grid>
{/*Ternary operator base syntax: getProducts !== null ? () : ()*/}
            <Container component="main">

                {
                    getProducts !== null ? (

                        <Grid container
                            component="main"
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            spacing={1}
                            sx={{ height: "100%" }}>

                            {
                                getProducts!.map((product) => (
                                    <Grid item xs={3}>
                                        <BaseCard title={product.titulo}
                                            link={product.link} price={product.precio}
                                            store={product.tienda} />
                                    </Grid>
                                ))

                            }
                        </Grid>

                    ) :

                        <Grid container
                            component="main"
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

            </Container>
        </BasicLayout>
    </>
}
