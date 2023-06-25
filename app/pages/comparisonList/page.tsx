"use client"

import React from "react";
import { Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { producto } from "../search/interface/product.interface";
import { apiComparisonList } from "@/app/api/comparisonList/comparison";
import { BaseForm } from "@/app/components/BaseForm";

export default function ComparisonList() {

    const [comparisonListProducts, setComparisonListProducts] = React.useState<producto[] | null>(null);

    React.useEffect(() => {

        apiComparisonList.getComparisonList().then((response) => {
            setComparisonListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })

    }, [])

    const handleAsc = () => {
        apiComparisonList.getComparisonListOrdered().then((response) => {
            setComparisonListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })
    }

    const handleDesc = () => {
        apiComparisonList.getComparisonListOrderInverted().then((response) => {
            setComparisonListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })
    }

    const handleComparison = () => {

        apiComparisonList.getComparisonListComparison().then((response) => {
            setComparisonListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })
    }

    const handleList = () => {
        apiComparisonList.getComparisonList().then((response) => {
            setComparisonListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })
    }

    return <>

        <BasicLayout>
            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                alignContent='center'
                direction="row"
                sx={{ width: "100%" }}
                spacing={2}
            >

                <Grid item
                    sx={{ width: "80%", mt: 2 }}
                >
                    <Stack direction="row" spacing={2}>

                        <Button type="button" variant="contained" onClick={handleAsc}>Order Asc</Button>
                        <Button type="button" variant="contained" onClick={handleDesc}>Order Desc</Button>
                        <Button type="button" variant="contained" onClick={handleComparison}>Comparison</Button>
                        <Button type="button" variant="contained" onClick={handleList}>Initial List</Button>

                    </Stack>

                </Grid>

                <Grid item
                    sx={{ width: "80%" }}>

                    <BaseForm title='Filter by price' children={
                        <>
                            {/* <TextField name='minPrice' placeholder="min" onChange={handleChgPrice}></TextField>
                            <TextField name='maxPrice' placeholder="max" onChange={handleChgPrice}></TextField> */}
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
                        submit={handlePriceFiltering}></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: "40%" }}>

                    <BaseForm title='Filter by brand' children={
                        <>
                            <TextField name='name' placeholder="brand name" onChange={handleChgBrand}></TextField>
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
                        submit={handleBrand}></BaseForm>

                </Grid>

                <Grid item
                    sx={{ width: "40%" }}>

                    <BaseForm title='Filter by seller' children={
                        <>
                            {/* <TextField name='name' placeholder="seller name" onChange={handleChgSeller}></TextField> */}
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
                        submit={handleSeller}></BaseForm>
                </Grid>
            </Grid>


        </BasicLayout>
    </>
}

