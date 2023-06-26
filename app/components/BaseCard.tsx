import { Button, Card, CardActions, CardContent, Typography, Link, CardMedia, TextField } from "@mui/material";
import React from "react";
import { apiWishList } from "../api/wishList/wishList";
import { useNotification } from "../context/notification.context";
import { showInfoById } from "../types/wishListsModule/forms";
import { apiComparisonList } from "../api/comparisonList/comparison";
import { MessageIntInterface, MessageInterface } from "../interface/Message.interface";


type BaseCardProperties = {
    title: string,
    price: number,
    link: string,
    store: string,
    image: string,
    brand: string,

}

export const BaseCard: React.FC<BaseCardProperties> = ({ title, price, link, store, image, brand}: BaseCardProperties) => {

    const { getSuccess, getError } = useNotification();

    const [idProd , setIdProd] = React.useState<showInfoById>({
        id : -100
    })

const [messageAgregarProdWish, setmessageAgregarProdWish] = React.useState<MessageInterface>(
    {
        message: ''
    }
);

    const handlePostWishList = () => {

        apiWishList.postWishListProduct(idProd.id ,title, price, link, store, image, brand).then((response) => {
            setmessageAgregarProdWish(response.data)
            getSuccess(messageAgregarProdWish.message)
        }).catch((error) => {
            getError((error.message))
        })
    }
    

    const handleChgId = (e : React.ChangeEvent<HTMLInputElement>) => {

        setIdProd({
            ...idProd, [e.target.name] : e.target.value
        })
    }



    const [idProd2 , setIdProd2] = React.useState<showInfoById>({
        id : -100
    })

    const [messageAgregarProdCompar, setmessageAgregarProdCompar] = React.useState<MessageInterface>(
        {
            message: ''
        }
    );

    const handlePostComparisonList = () => {

        apiComparisonList.postComparisonListProduct(idProd2.id ,title, price, link, store, image, brand).then((response) => {
            setmessageAgregarProdCompar(response.data)
            getSuccess(messageAgregarProdCompar.message)
        }).catch((error) => {
            getError((error.message))
        })
    }
    

    const handleChgId2 = (e : React.ChangeEvent<HTMLInputElement>) => {

        setIdProd2({
            ...idProd2, [e.target.name] : e.target.value
        })
    }


    return <Card>

        <CardMedia

            component='img'
            height='200'
            image={image}

        />

        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{price}</Typography>
            <Typography variant="h6">{brand}</Typography>
        </CardContent>

        <CardActions>
            <Button variant="outlined"><Link underline='hover' color='black' href={link}>{store}</Link></Button>
            <TextField name = 'id' placeholder="id" onChange={handleChgId}></TextField>
            <Button onClick={handlePostWishList} variant='contained'>Add to wish list</Button>
            <TextField name = 'id' placeholder="id" onChange={handleChgId2}></TextField>
            <Button onClick={handlePostComparisonList} variant='contained'>Add comparisonList</Button>
        </CardActions>

    </Card>
}

//<Link className = "text-black" href={link}> how to 