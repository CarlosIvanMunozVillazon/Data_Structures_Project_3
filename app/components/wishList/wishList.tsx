
import { apiWishList } from '@/app/api/wishList/wishList';
import { producto } from '@/app/pages/search/interface/product.interface';
import { Paper, Box, Grid, Stack, Button } from '@mui/material';
import React from 'react';

type WishListProps = {
    title?: string,
    productos: producto[] | null,
    wishListId: number
}

export const WishList: React.FC<WishListProps> = ({ title, productos, wishListId }: WishListProps) => {

    return (
        <>
            <Stack direction='column' spacing={2} sx={{ width: '100%' }}>
                <Paper>
                    <Box component='div'
                        sx={{ width: '100%' }}
                    >
                        <Button>Delete Max</Button>

                    </Box>
                </Paper>

                {productos !== null ? ( //if we got elements then we render them. if not then we don't render nothing.


                    <Grid container
                        component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="column"
                        spacing={1}
                        sx={{ height: "100%", mt: 3, width: '100%' }}>

                        {

                            productos!.map((response) => (
                                <Grid key={response.precio + 1} item sx={{ width: '100%' }}>
                                    <Paper>
                                        <p>{response.titulo}</p>
                                        <p>{response.marca}</p>
                                    </Paper>

                                    <Button variant='contained' onClick={() => {
                                        apiWishList.deleteWishListProduct(wishListId, response.titulo, response.precio, response.link,
                                            response.tienda, response.marca, response.imagen).then((respo) => {
                                                console.log(respo.data)
                                            }).catch((error) => {
                                                console.log(error.message)
                                            })
                                    }} ></Button>
                                </Grid>
                            ))

                        }

                    </Grid>

                ) : <p>No se ha procesado ninguna petición.</p>}

            </Stack>

        </>
    )
}
