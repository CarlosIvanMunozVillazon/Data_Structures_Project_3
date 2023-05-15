import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

type HeaderProperties = {
    title: string,
    description: string,
    element?: React.ReactNode | null

}

export const Header: React.FC<HeaderProperties> = ({ title, description, element }: HeaderProperties) => {
    // Box es el analogo de container en componentes.
    // height : "100%" toma el 100% de la altura del contenedor, con un ancho estático de 300px
    // dentro de box desplegamos la grilla. con display row para que los elementos se añadan en fila y altura de 100% para que tome todo el contenedor
    // en el primer item de la grilla desplegamos un item con un xs = {5} para que tome un ancho de 5. Recordar que la grid de material ui se porciona en valores
    // de 0 a 12 por fila.
    return (
        <div>
            <Box sx={{ width: "100%", height: "350px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={5}>

                        <Grid /*Para que contenga la imagen, descripción y titulo*/
                            /*Así es como se alinea la imagen dentro de una cuadricula hija*/
                            container /*Todas estas cosas tienen efecto sobre los items de la grid*/
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "100%" }}
                        >
                            <Grid item>
                                <Typography variant="h1" align='center' sx={{ m: 1.5 }}>{title}</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h5" align='center' sx={{ m: 1.5 }}>{description}</Typography>
                            </Grid>


                            {element !== undefined && (
                                <Grid sx={{ m: 1.5, width: "40%" }} item>
                                    {element}
                                </Grid>
                            )}

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Header