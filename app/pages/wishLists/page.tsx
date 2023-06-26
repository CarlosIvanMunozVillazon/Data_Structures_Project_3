"use client"

import React from "react";
import Image from "next/image"
import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { apiWishList } from "@/app/api/wishList/wishList";
import { producto } from "../search/interface/product.interface";
import { BaseForm } from "@/app/components/BaseForm";
import { infoWishList, showInfoById, showInfoByName } from "@/app/types/wishListsModule/forms";
import { useNotification } from "@/app/context/notification.context";
import { MessageIntListInterface, MessageInterface } from "@/app/interface/Message.interface";
import { BaseCard } from "@/app/components/BaseCard";

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
        e.preventDefault()
        apiWishList.getWishListId(getIdsByName.name).then((response) => {
            setWistListsId(response.data)
            getSuccess('Query completed')
        }).catch((error) => {
            getError(error.message)
        })
    }


    //Get name by id
    
    const [wishListsTotal, setWistListsTotal] = React.useState<MessageIntListInterface>({
        message: []
    })
   

    const handleWishListsTotal = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        apiWishList.getAllIds().then((response) => {
            setWistListsTotal(response.data)
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


    const handleChgInfoWishList = (e : React.ChangeEvent<HTMLInputElement>) => {

        setWishListUpdate({
            ...wishListUpdate, [e.target.name] : e.target.value
        })
    }

    const [responseUpdateName, setresponseUpdateName] = React.useState<MessageInterface>(
        {
            message: ''
        }
    )

    const handleWishListUpdate = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        apiWishList.putWishListName(wishListUpdate.id, wishListUpdate.name).then((response) => {
            setresponseUpdateName(response.data)
            getSuccess(responseUpdateName.message)
        }).catch((error) => {
            getError(error.message)
        })
    }

    //get all my wishLists

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
        e.preventDefault()
        apiWishList.getWishListName(getNamesById.id).then((response) => {
            setWistListsNames(response.data)
            getSuccess('Query completed')
        }).catch((error) => {
            getError(error.message)
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


                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Update your wishlists' children={
                            <>
                                <TextField name="id" placeholder="Wish list id" onChange={handleChgInfoWishList}></TextField>
                                <TextField name="name" placeholder="New name" onChange={handleChgInfoWishList}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Update</Button></>
                            }

                            children3={
                                <></>
                            }
                            submit={handleWishListUpdate}></BaseForm>

                        <BaseForm title='' children={
                            <>
                            <Typography>Show all my wish lists</Typography>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Show</Button></>
                            }

                            children3={
                                <>
                                {wishListsTotal !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Stack component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="column"
                                        spacing={1}
                                        sx={{ height: "100%", mt: 3, width: "100%" }}>

                                        {

                                            wishListsTotal.message!.map((response) => (
                                                <Typography>
                                                    {response}
                                                </Typography>
                                            ))

                                        }
                                    </Stack>

                                    ) : <p>No wish lists avaiblable</p>
                                    }
                                </>
                            }
                            submit={handleWishListsTotal}></BaseForm>

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
                                            <Stack direction="column">
                                                <Typography>{response.titulo}</Typography>
                                                <Typography>{response.precio}</Typography>
                                                <img src={response.imagen} width="250" height="250"/>
                                                <Typography>{response.link}</Typography>
                                                <Typography>{response.marca}</Typography>
                                                <Typography>{response.tienda}</Typography>
                                            </Stack>
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

                        ) : <p>No wish lists avaiblable</p>
                    }

                </Grid>
            </Grid>
        </BasicLayout >
    </>
}

