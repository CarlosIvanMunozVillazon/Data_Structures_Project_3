import { Button, Card, CardActions, CardContent, Typography, Link, CardMedia } from "@mui/material";
import React from "react";
import { apiWishList } from "../api/wishList/wishList";
import { useNotification } from "../context/notification.context";


type BaseCardProperties = {
    title: string,
    price: number,
    link: string,
    store: string,
    image : string,
    brand : string
    
}

export const BaseCard: React.FC<BaseCardProperties> = ({ title, price, link, store, image, brand }: BaseCardProperties) => {

    const {getSuccess, getError} = useNotification();

    const handlePostWishList = () => {

        // apiWishList.postWishList(title, price, link, store, image, brand).then((response) => {
        //     getSuccess(response.data)
        // }).catch((error) => {
        //     getError((error.message))
        // })
    }
        
    return <Card>

        <CardMedia

            component = 'img'
            height = '200'
            image = {image}

        />

        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{price}</Typography>
            <Typography variant="h6">{brand}</Typography>
        </CardContent>

        <CardActions>
            <Button variant="outlined"><Link underline = 'hover' color = 'black' href={link}>{store}</Link></Button>
            <Button onClick={handlePostWishList} variant = 'contained'>Add to wish list</Button>    
        </CardActions>
        
    </Card>
}

//<Link className = "text-black" href={link}> how to 