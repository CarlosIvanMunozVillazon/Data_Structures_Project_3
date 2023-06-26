"use client"

import React from "react";
import { Box, Button, Container, Link, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { producto } from "../search/interface/product.interface";
import { apiComparisonList } from "@/app/api/comparisonList/comparison";
import { BaseForm } from "@/app/components/BaseForm";
import { useNotification } from "@/app/context/notification.context";

import { MessageIntListInterface, MessageInterface } from "@/app/interface/Message.interface";
import { showInfoById, showInfoByName, infoWishList } from "@/app/types/wishListsModule/forms";
import { ComparisonInterface } from "./interface/Comparison.interface";

export default function ComparisonList() {

    //Global
    const [responses, setResponses] = React.useState<MessageInterface>({
        message: ''
    })

    const { getError, getSuccess } = useNotification();

    const [getById, setGetById] = React.useState<showInfoById>({
        id: -1
    });

    const [comparisonListProducts, setcomparisonListProducts] = React.useState<producto[] | null>(null);


    const handleChgId1 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetById({
            ...getById, [e.target.name]: e.target.value
        })
    }

    const loadWishList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        apiComparisonList.getComparisonList(getById.id).then((response) => {
            console.log(response.data)
            setcomparisonListProducts(response.data)
        }).catch((error) => {
            console.log(error.message)
        })

    }




    let productToDelete: producto;

    const deleteFromcomparisonList = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(getById.id, productToDelete.titulo, productToDelete.precio, productToDelete.link,
            productToDelete.tienda, productToDelete.imagen, productToDelete.marca)

        apiComparisonList.deleteComparisonListProduct(getById.id, productToDelete.titulo, productToDelete.precio, productToDelete.link,
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

        apiComparisonList.postComparisonList(parPostNewWishList.name).then((response) => {
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

        apiComparisonList.deleteComparisonList(parDelWishList.id).then((response) => {
            setResponses(response.data)
            getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }


    //Comparison List 2 order
    const [parGetInOrder, setGetInOrder] = React.useState<showInfoById>({
        id: -1,
    })

    const handleChgId4 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetInOrder({
            ...parGetInOrder, [e.target.name]: e.target.value
        })
    }

    const handleGetListInOrder = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        apiComparisonList.getComparisonListOrdered(parGetInOrder.id).then((response) => {
            console.log(response.data)
            setcomparisonListProducts(response.data)
            // setResponses(response.data)
            // getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }


    const [parGetInOrderInverted, setGetInOrderInverted] = React.useState<showInfoById>({
        id: -1,
    })

    const handleChgId5 = (e: React.ChangeEvent<HTMLInputElement>) => {

        setGetInOrderInverted({
            ...parGetInOrder, [e.target.name]: e.target.value
        })
    }

    const handleGetListInOrderInverted = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        apiComparisonList.getComparisonListOrderInverted(parGetInOrderInverted.id).then((response) => {
            console.log(response.data)
            setcomparisonListProducts(response.data)
            // setResponses(response.data)
            // getSuccess(responses.message)
        }).catch((error) => {
            getError(error.message)
        })
    }

    const [idCompareListToCompare, setidCompareListToCompare] = React.useState<showInfoById>({
        id: -1,
    })

    const [resultComparison, setresultComparison] = React.useState<ComparisonInterface>({
        best: {
            titulo: "",
            precio: 0,
            link: "",
            tienda: "",
            imagen: "",
            marca: ""
        },
        worst: {
            titulo: "",
            precio: 0,
            link: "",
            tienda: "",
            imagen: "",
            marca: ""
        },
        products_order: []
    })

    const handleChgIdCompare = (e: React.ChangeEvent<HTMLInputElement>) => {

        setidCompareListToCompare({
            ...idCompareListToCompare, [e.target.name]: e.target.value
        })
    }

    const handleCompare = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        apiComparisonList.getComparisonListComparison(idCompareListToCompare.id).then((response) => {
            console.log(response.data[0])
            setresultComparison(response.data)
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
        e.preventDefault()
        setGetIdsByName({
            ...getIdsByName, [e.target.name]: e.target.value
        })
    }

    const handleGettingIdsByName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        apiComparisonList.getComparisonListID(getIdsByName.name).then((response) => {
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
        apiComparisonList.getComparisonListIDs().then((response) => {
            setWistListsTotal(response.data)
            getSuccess('Query completed')
        }).catch((error) => {
            getError(error.message)
        })
    }


    //updateWishList
    const [wishListUpdate, setWishListUpdate] = React.useState<infoWishList>({
        id: -2,
        name: ''
    })


    const handleChgInfoWishList = (e: React.ChangeEvent<HTMLInputElement>) => {

        setWishListUpdate({
            ...wishListUpdate, [e.target.name]: e.target.value
        })
    }

    const handleWishListUpdate = (e: React.FormEvent<HTMLFormElement>) => {

        apiComparisonList.putComparisonListName(wishListUpdate.id, wishListUpdate.name).then((response) => {
            getSuccess(response.data)
        }).catch((error) => {
            getError(error.message)
        })
    }

    //get all my wishLists

    const [getNamesById, setGetNamesById] = React.useState<showInfoById>({
        id: -1,
    })

    const [wishListsNames, setWistListsNames] = React.useState<MessageInterface>({
        message: ''
    })

    const handleChgId3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setGetNamesById({
            ...getNamesById, [e.target.name]: e.target.value
        })
    }

    const handleNamesById = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        apiComparisonList.getComparisonListName(getNamesById.id).then((response) => {
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

                        <BaseForm title='Query your comparisons' children={
                            <>
                                <TextField name="id" placeholder="Comparison list id" onChange={handleChgId1}></TextField>
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
                        <BaseForm title='Create new comparison list' children={
                            <>
                                <TextField name="name" placeholder="New comparison list name" onChange={handleChgWishListName1}></TextField>
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
                        <BaseForm title='Delete comparison list' children={
                            <>
                                <TextField name="id" placeholder="Comparison list id" onChange={handleChgId2}></TextField>
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
                                <TextField name="name" placeholder="Comparison list name" onChange={handleChgName1}></TextField>
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
                                <TextField name="id" placeholder="Comparison list id" onChange={handleChgId3}></TextField>
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


                        <BaseForm title='Comparison List Order' children={
                            <>
                                <TextField name="id" placeholder="Wish list name" onChange={handleChgId4}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Query</Button></>
                            }

                            children3={
                                <>

                                    {/* <Typography>{wishListsId.message}</Typography> */}

                                </>
                            }
                            submit={handleGetListInOrder}></BaseForm>


                        <BaseForm title='Comparison List Order Inverted' children={
                            <>
                                <TextField name="id" placeholder="Wish list name" onChange={handleChgId5}></TextField>
                            </>
                        }

                            children2={
                                <><Button variant='contained' type="submit">Query</Button></>
                            }

                            children3={
                                <>
                                </>
                            }
                            submit={handleGetListInOrderInverted}></BaseForm>


                        <BaseForm title='Compare Products' children={
                            <>
                                <TextField name="id" placeholder="Comparison list id" onChange={handleChgIdCompare}></TextField>
                            </>
                        }

                            children2={
                                <Button variant='contained' type="submit">View</Button>
                            }

                            children3={
                                <>
                                
                                {resultComparison !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                                    <Stack component="div"
                                        justifyContent="center"
                                        alignItems="center"
                                        direction="column"
                                        spacing={1}
                                        sx={{ height: "100%", mt: 3, width: "100%" }}>

                                        {
                                            
                                            <Stack direction="column">

                                                <BaseForm title='' children={
                                                    <>
                                                        <Stack direction="column">
                                                            <Typography>{resultComparison.best.titulo}</Typography>
                                                            <Typography>{resultComparison.best.precio}</Typography>
                                                            <img src={resultComparison.best.imagen} width="250" height="250"/>
                                                            <Typography>{resultComparison.best.link}</Typography>
                                                            <Typography>{resultComparison.best.marca}</Typography>
                                                            <Typography>{resultComparison.best.tienda}</Typography>
                                                        </Stack>
                                                    </>
                                                }

                                                    children2={
                                                        <>
                                                            <Button variant='contained' type="submit" sx={{ mr: 0.5 }}>Delete</Button>
                                                            <Button variant='contained' type="button" onClick={() => {
                                                                productToDelete = resultComparison.best
                                                            }}>Select</Button>

                                                        </>
                                                    }

                                                    children3={
                                                        <></>
                                                    }
                                                    submit={deleteFromcomparisonList}></BaseForm>

                                                <BaseForm title='' children={
                                                    <>
                                                        <Stack direction="column">
                                                            <Typography>{resultComparison.worst.titulo}</Typography>
                                                            <Typography>{resultComparison.worst.precio}</Typography>
                                                            <img src={resultComparison.worst.imagen} width="250" height="250"/>
                                                            <Typography>{resultComparison.worst.link}</Typography>
                                                            <Typography>{resultComparison.worst.marca}</Typography>
                                                            <Typography>{resultComparison.worst.tienda}</Typography>
                                                        </Stack>
                                                    </>
                                                }

                                                    children2={
                                                        <>
                                                            <Button variant='contained' type="submit" sx={{ mr: 0.5 }}>Delete</Button>
                                                            <Button variant='contained' type="button" onClick={() => {
                                                                productToDelete = resultComparison.worst
                                                            }}>Select</Button>

                                                        </>
                                                    }

                                                    children3={
                                                        <></>
                                                    }
                                                    submit={deleteFromcomparisonList}></BaseForm>
                                        </Stack>
                                        }
                                    </Stack>

                                    ) : <p>No wish lists avaiblable</p>
                                    }
                                </>
                            }
                            submit={handleCompare}></BaseForm>


                        {/*IMPLEMENTADO**/}
                        <BaseForm title='Update your comparison lists' children={
                            <>
                                <TextField name="id" placeholder="comparison list id" onChange={handleChgInfoWishList}></TextField>
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


                {comparisonListProducts !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                    <Stack component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing={1}
                        sx={{ height: "100%", mt: 3, width: "100%" }}>

                        {

                            comparisonListProducts!.map((response) => (
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
                                    submit={deleteFromcomparisonList}></BaseForm>
                            ))

                        }
                    </Stack>

                    ) : <p>No comparison lists avaiblable</p>
                    }
                </Grid>
            </Grid>
        </BasicLayout >
    </>
}


