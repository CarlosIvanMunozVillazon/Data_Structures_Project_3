"use client"

import React from "react";
import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { apiWishList } from "@/app/api/wishList/wishList";
import { producto } from "../search/interface/product.interface";
import { BaseForm } from "@/app/components/BaseForm";
import { showInfoById } from "@/app/types/wishListsModule/forms";
import { WishList } from "@/app/components/wishList/wishList";

export default function WishLists() {

    const [getById, setGetById] = React.useState<showInfoById>({
        id: -1
    });

    const [wishListProducts, setWishListProducts] = React.useState<producto[] | null>(null);

    const handleChgId1 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetById({
            ...getById, [e.target.name]: e.target.value
        })
    }

    const loadWishList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiWishList.getWishList(getById.id).then((response) => {
            console.log(response.data)
            setWishListProducts(response.data)
        }).catch((error) => {
            console.log(error.message)
        })

    }

    let productToDelete: producto;

    const deleteFromWishList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(getById.id ,productToDelete.titulo, productToDelete.precio, productToDelete.link,
            productToDelete.tienda, productToDelete.imagen, productToDelete.marca)

        apiWishList.deleteWishListProduct(getById.id, productToDelete.titulo, productToDelete.precio, productToDelete.link,
            productToDelete.tienda, productToDelete.imagen, productToDelete.marca).then((respo) => {
                console.log(respo.data)
            }).catch((error) => {
                console.log(error.message)
            })

    }


    return <>

        <BasicLayout>

            <Grid
                component="main"
                container
                alignItems="center"
                direction="row"
                justifyContent="center"
                spacing={5}
                sx={{ height: "100%", mt: 2, width: "100%" }}
            >

                <Grid item xs={4}>
                    <Stack direction='column' spacing={1.5}>

                        <BaseForm title='Query your wish lists' children={
                            <>
                                <TextField name="id" placeholder="Wish List id" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <Button variant='contained' type="submit">View</Button>
                            }

                            children3={
                                <>
                                </>
                            }
                            submit={loadWishList}></BaseForm>





                        <BaseForm title='Create new wish list' children={
                            <>
                                <TextField name="name" placeholder="New wish list name" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Delete wish list' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Delete wish list' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Get ids by name' children={
                            <>
                                <TextField name="name" placeholder="Wish list name" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Get names by id' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Update your wishlists' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId1}></TextField>
                                <TextField name="newName" placeholder="New name" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                        <BaseForm title='Get all my wish lists' children={
                            <>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit"></Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={loadWishList}></BaseForm>

                    </Stack>
                </Grid>


                <Grid item xs={8}>

                    {/* <WishList productos={wishListProducts}>

                    </WishList> */}

                    {wishListProducts !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                        <Stack component="div"
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                            spacing={1}
                            sx={{ height: "100%", mt: 3, width: "100%" }}>

                            <Button variant='contained'>Delete Max Product</Button>

                            {

                                wishListProducts!.map((response) => (
                                    <BaseForm title='' children={
                                        <>
                                            <Typography>{response.titulo}</Typography>
                                        </>
                                    }

                                        children2={
                                            <>
                                                <Button variant='contained' type="submit">Delete</Button>
                                                <Button variant='contained' type="button" onClick={() => {
                                                    productToDelete = response
                                                }}>Select</Button>

                                            </>
                                        }

                                        children3={
                                            <></>
                                        }
                                        submit={deleteFromWishList}></BaseForm>
                                ))

                            }
                        </Stack>

                    ) : <p>No wish lists avaiblable</p>}

                </Grid>
            </Grid>
        </BasicLayout >
    </>
}

