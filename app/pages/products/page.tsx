"use client"
import { apiProducts } from "@/app/api/products/product";
import BasicLayout from "@/app/layouts/BasicLayout";
import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { BaseCard } from "@/app/components/BaseCard";
import { producto } from "../search/interface/product.interface";
import { BaseForm } from "@/app/components/BaseForm";

type priceFilter = {
    minPrice: number,
    maxPrice: number
}

type nameFilter = {
    name: string
}


export default function Products() {


    const [gottenProducts, setgottenProducts] = React.useState<producto[] | null>(null);

    React.useEffect(() => {

        apiProducts.getAllProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })

    }, [])

    /*Ternary operator base syntax: getProducts !== null ? () : ()*/

    const handleAsc = () => {
        apiProducts.orderProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })
    }

    const handleDesc = () => {

        apiProducts.orderInvertedProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })
    }

    const handleBest = () => {

        apiProducts.bestProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })

    }

    const handleAll = () => {

        apiProducts.getAllProducts().then((response) => {
            setgottenProducts(response.data)
        }).catch((error) => {
            console.log(`${error}`)
        })
    }

    //Complex filtering "price"
    const [priceData, setPriceData] = React.useState<priceFilter>({
        minPrice: 0,
        maxPrice: 0
    })

    const handleChgPrice = (e: React.ChangeEvent<HTMLInputElement>) => {

        setPriceData({
            ...priceData, [e.target.name]: e.target.value
        })
    }

    const handlePriceFiltering = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiProducts.filterProductsByPrice(priceData.minPrice, priceData.maxPrice).then((response) => {
            setgottenProducts(response.data)
        }).catch((Error) => {
            console.log(`${Error}`)
        })
    }

    //"brand name" & "seller name"
    const [brandName, setBrandName] = React.useState<nameFilter>({
        name: ''
    })

    const [sellerName, setSellerName] = React.useState<nameFilter>({
        name: ''
    })

    const handleChgBrand = (e: React.ChangeEvent<HTMLInputElement>) => {

        setBrandName({
            ...brandName, [e.target.name]: e.target.value
        })
    }

    const handleChgSeller = (e: React.ChangeEvent<HTMLInputElement>) => {

        setSellerName({
            ...sellerName, [e.target.name]: e.target.value
        })
    }

    const handleBrand = () => {

        apiProducts.filterProductsByBrand(brandName.name).then((response) => {
            setgottenProducts(response.data);
        }).catch((error) => {
            console.log(error.message)
        })
    }

    const handleSeller = () => {
        apiProducts.filterProductsBySeller(sellerName.name).then((response) => {
            setgottenProducts(response.data);
        }).catch((error) => {
            console.log(error.message)
        })
    }


    return (<>
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
                    sx={{ width: "80%" , mt : 2}}
                >
                    <Stack direction="row" spacing={2}>

                        <Button type="button" variant="contained" onClick={handleAsc}>Orden Ascendente</Button>
                        <Button type="button" variant="contained" onClick={handleDesc}>Orden Descendente</Button>
                        <Button type="button" variant="contained" onClick={handleBest}>Mejor producto</Button>
                        <Button type="button" variant="contained" onClick={handleAll}>Todos</Button>

                    </Stack>

                </Grid>

                <Grid item
                    sx={{ width: "80%" }}>

                    <BaseForm title='Filter by price' children={
                        <>
                            <TextField name='minPrice' placeholder="min" onChange={handleChgPrice}></TextField>
                            <TextField name='maxPrice' placeholder="max" onChange={handleChgPrice}></TextField>
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
                        submit={handleSeller}></BaseForm>
                </Grid>
            </Grid>

            <Container component="main" sx = {{mt : 2, width : '100%'}}>

                {
                    gottenProducts !== null ? (

                        <Grid container
                            component="main"
                            justifyContent="center"
                            alignItems="center"
                            direction="row"
                            spacing={1}
                            sx={{ height: "100%", mt : 2}}>

                            {
                                gottenProducts!.map((product) => (
                                    <Grid item xs={4}>
                                        <BaseCard title={product.titulo}
                                            link={product.link} price={product.precio}
                                            store={product.tienda} brand = {product.marca}
                                            image = {product.imagen}/>
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
    </>)
}
