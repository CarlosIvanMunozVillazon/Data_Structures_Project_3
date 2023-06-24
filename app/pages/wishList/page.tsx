"use client"

import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { apiWishList } from "@/app/api/wishList/wishList";
import { producto } from "../search/interface/product.interface";

export default function WishList () {

    const [wishListProducts, setWishListProducts] = React.useState<producto[] | null>(null);

    React.useEffect(() => {

        apiWishList.getWishList().then((response) => {
            setWishListProducts(response.data);
        }).catch((Error) => {
            console.log(`${Error}`)
        })

    }, [])

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

                    <Grid item>
                        
                    </Grid>


                    <Grid item sx={{ width: "50%" }}>

                        <Box component="form" sx={{ width: "100%" }} > {/*onSubmit={handleSubmit}*/}
                            {/* <Stack direction="column" alignItems="center" spacing={2}>
                                <TextField sx={{ width: "70%" }} name="itemName" placeholder="What are you looking for?"
                                    onChange={newItem}></TextField>
                                <Button type="submit" variant="contained" size="small" sx={{ width: "25%" }}>Search</Button>
                            </Stack> */}
                        </Box>
                    </Grid>

                    {
                        wishListProducts !== null ? ( //if we got elements then we render them. if not then we don't render nothing.

                            <Grid container
                                component="div"
                                justifyContent="center"
                                alignItems="center"
                                direction="row"
                                spacing={1}
                                sx={{ height: "100%" }}>
                                <Grid item >
                                    <Link underline="hover" color='GrayText' href="/pages/products/"><Typography variant="caption">Products ready: click me</Typography></Link>
                                </Grid>
                            </Grid>

                        ) :

                            <Grid container
                                component="div"
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

                </Grid>
            </Container>
        </BasicLayout>
    </>
}

