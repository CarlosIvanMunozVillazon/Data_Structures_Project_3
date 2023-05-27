"use client"
import { products } from "@/app/api/product";
import BasicLayout from "@/app/layouts/BasicLayout";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ProductInterface } from "./interface/Product.interface";
import { BaseCard } from "@/app/components/BaseCard";
import { isNull } from "util";

export default function Products() {


    const [getProducts, setGetProducts] = React.useState<ProductInterface[] | null>(null);

    // React.useEffect(() => {

    //     products.getAll().then((r) => {
    //         setGetProducts(r.data)
    //     }).catch((Error) => {
    //         console.error(Error)
    //     })

    // }, [])


    //    const [allCharacters, setAllCharacters] = React.useState<CharacterType[] | null>(null);


    // React.useEffect(() => { //allows loading info when the page is loaded.
    //     characters.getAll({ page: 1 }).then((r) => { //whithin then and catch we put arrow functions.
    //         setAllCharacters(r.data.results)
    //     }).catch((e) => {
    //         console.error(e);
    //     })
    // }, [])

    //we can also load specific character info, by adding a character function.

    /*
    React.useEffect(() => {
        characters.getCharacterById({ id: 1 }).then((r) => {
            console.log(r.data);
        }).catch((Error) => {
            console.error(Error)
        })
    }, [])


{allCharacters?.length !== 0 ? (
                    <Grid item>
                        {
                            allCharacters!.map((character) => (
                                <ProductCard imageRef={character.image} name={character.name}
                                    species={character.species} description="generic card desc"
                                />

                            ))
                        }
                    </Grid>
                ) : ""}
//events offer info about events

    */




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
                                    <Typography variant = "caption">No elements found</Typography>
                                </Grid>
                        </Grid>

                }
                {/* {allCharacters?.length !== 0 ? (
                    <Grid container
                        component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{ width: "100%", height: "100%", mt: 0.7 }}>

{
                            allCharacters!.map((character) => (
                                <Grid item xs={3}>
                                    <ProductCard key={character.id} imageRef={character.image} name={character.name}
                                        species={character.species} description="generic card desc"
                                    />
                                </Grid>

                            ))
                        }
                    </Grid>
                ) : ""} */}
            </Container>
        </BasicLayout>
    </>
}

/*


{allCharacters?.length !== 0 ? (
                    <Grid container
                        component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{ width: "100%", height: "100%", mt: 0.7 }}>

{
                            allCharacters!.map((character) => (
                                <Grid item xs={3}>
                                    <ProductCard key={character.id} imageRef={character.image} name={character.name}
                                        species={character.species} description="generic card desc"
                                    />
                                </Grid>

                            ))
                        }
                    </Grid>
                ) : ""}


*/