import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

//At the beggining always define component properties.
type ProductCardProperties = {
    imageRef : string
    name : string
    species : string
    description : string    
}

export const ProductCard : React.FC <ProductCardProperties> = ({imageRef, name, species, description} : ProductCardProperties) => {
    return <>
        <Card>
            <CardMedia 
                component = "img"
                height= "194"
                image = {imageRef}
                alt = "Character Card"
            />
            {/*Card media: loads an image */}

            <CardContent>
                <Typography variant = "h3">{name}</Typography>
                <Typography variant = "body1">{description}</Typography>
                <Typography variant = "subtitle1">{species}</Typography>
            </CardContent>

            <CardActions>
                <Button variant = "contained" size = "medium">Learn More</Button>
            </CardActions>
        </Card>        
    </>
}