"use client"

import React from "react";
import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { apiWishList } from "@/app/api/wishList/wishList";
import { producto } from "../search/interface/product.interface";
import { BaseForm } from "@/app/components/BaseForm";
import { infoWishList, showInfoById, showInfoByName } from "@/app/types/wishListsModule/forms";
import { WishList } from "@/app/components/wishList/wishList";
import { useNotification } from "@/app/context/notification.context";
import { MessageInterface } from "@/app/interface/Message.interface";

export default function WishLists() {

    //Global
    const [responses, setResponses] = React.useState<MessageInterface>({
        message: ''
    })

    const { getError, getSuccess } = useNotification();

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

        console.log(getById.id, productToDelete.titulo, productToDelete.precio, productToDelete.link,
            productToDelete.tienda, productToDelete.imagen, productToDelete.marca)

        apiWishList.deleteWishListProduct(getById.id, productToDelete.titulo, productToDelete.precio, productToDelete.link,
            productToDelete.tienda, productToDelete.imagen, productToDelete.marca).then((respo) => {
                console.log(respo.data)
            }).catch((error) => {
                console.log(error.message)
            })

    }


    //Other forms controlling
    //Wish list creation.
    const [parPostNewWishList, setParPostNewWishList] = React.useState<showInfoByName>({
        name: ''
    })

    const handleChgWishListName1 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParPostNewWishList({
            ...parPostNewWishList, [e.target.name]: e.target.value
        })
    }



    const handleWishListCreations = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        apiWishList.postNewWishList(parPostNewWishList.name).then((response) => {
            setResponses(response.data)
            getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }

    //Wish list deletion
    const [parDelWishList, setParDeleteWishList] = React.useState<showInfoById>({
        id: -1,
    })


    const handleChgId2 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setParDeleteWishList({
            ...parDelWishList, [e.target.name]: e.target.value
        })
    }

    const handleWishListDeletions = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        apiWishList.deleteWishList(parDelWishList.id).then((response) => {
            setResponses(response.data)
            getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }


    //Max value product deletion:
    const handleMaxProductDeletion = () => {

        apiWishList.deleteWishListMax(getById.id).then((response) => {
            setResponses(response.data)
            getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }


    //Get ids by name
    const [getIdsByName, setGetIdsByName] = React.useState<showInfoByName>({
        name: ''
    })

    const [wishListsId, setWistListsId] = React.useState<MessageInterface>({
        message: ''
    })

    const handleChgName1 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetIdsByName({
            ...getIdsByName, [e.target.name]: e.target.value
        })
    }

    const handleGettingIdsByName = (e: React.FormEvent<HTMLFormElement>) => {

        apiWishList.getWishListId(getIdsByName.name).then((response) => {
            setWistListsId(response.data)
            getSuccess('Query completed')
        }).catch((error) => {
            getError(error.message)
        })
    }


    //Get name by id
    const [getNamesById, setGetNamesById] = React.useState<showInfoById>({
        id : -1,
    })

    const [wishListsNames, setWistListsNames] = React.useState<MessageInterface>({
        message: ''
    })

    const handleChgId3 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetNamesById({
            ...getNamesById, [e.target.name]: e.target.value
        })
    }

    const handleNamesById = (e: React.FormEvent<HTMLFormElement>) => {

        apiWishList.getWishListName(getNamesById.id).then((response) => {
            setWistListsNames(response.data)
            getSuccess('Query completed')
        }).catch((error) => {
            getError(error.message)
        })
    }


    //updateWishList
    const [wishListUpdate, setWishListUpdate] = React.useState<infoWishList>({
        id : -2,
        name : ''
    })

    


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



                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Create new wish list' children={
                            <>
                                <TextField name="name" placeholder="New wish list name" onChange={handleChgWishListName1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Create</Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={handleWishListCreations}></BaseForm>



                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Delete wish list' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId2}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Delete</Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={handleWishListDeletions}></BaseForm>



                        {/* <BaseForm title='Delete wish list' children={
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
                            submit={loadWishList}></BaseForm> */}


                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Get ids by name' children={
                            <>
                                <TextField name="name" placeholder="Wish list name" onChange={handleChgName1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Query</Button></>
                            }

                            children3={
                                <>

                                    <Typography>{wishListsId.message}</Typography>

                                </>
                            }
                            submit={handleGettingIdsByName}></BaseForm>

                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Get names by id' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId3}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Query</Button></>
                            }

                            children3={
                                <>

                                    <Typography>{wishListsNames.message}</Typography>

                                </>
                            }
                            submit={handleNamesById}></BaseForm>


{/*sdsdsdsdsdsddsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
{/*sdsdsdsdsdsddsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}
{/*sdsdsdsdsdsddsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd*/}

                        <BaseForm title='Update your wishlists' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgId1}></TextField>
                                <TextField name="newName" placeholder="New name" onChange={handleChgId1}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Update</Button></>
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


                    {wishListProducts !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                        <Stack component="div"
                            justifyContent="center"
                            alignItems="center"
                            direction="column"
                            spacing={1}
                            sx={{ height: "100%", mt: 3, width: "100%" }}>

                            <Button variant='contained' onClick={handleMaxProductDeletion}>Delete Max Product</Button>

                            {

                                wishListProducts!.map((response) => (
                                    <BaseForm title='' children={
                                        <>
                                            <Typography>{response.titulo}</Typography>
                                        </>
                                    }

                                        children2={
                                            <>
                                                <Button variant='contained' type="submit" sx={{ mr: 0.5 }}>Delete</Button>
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

