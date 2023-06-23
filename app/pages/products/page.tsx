"use client"
import { apiProducts } from "@/app/api/products/product";
import BasicLayout from "@/app/layouts/BasicLayout";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ProductInterface } from "../../interface/Product.interface";
import { BaseCard } from "@/app/components/BaseCard";
import { producto } from "../search/interface/product.interface";

export default function Products() {


    const [gottenProducts, setgottenProducts] = React.useState<producto[] | null>(null);



    const bringData = () => {

        apiProducts.getAllProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((Error) => {
            console.error(Error)
        })

    }

    React.useEffect(() => {

        apiProducts.getAllProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })
    }, [])

    /*Ternary operator base syntax: getProducts !== null ? () : ()*/


    return <>
        <BasicLayout>

            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="row"
                sx={{ width: "100%" }}
            >


                <Typography variant="caption">Fancy buttons still need to be placed.</Typography>




            </Grid>

            <Container component="main">

                {
                    gottenProducts !== null ? (

                        <Grid container
                            component="main"
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            spacing={1}
                            sx={{ height: "100%" }}>

                            {
                                gottenProducts!.map((product) => (
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
