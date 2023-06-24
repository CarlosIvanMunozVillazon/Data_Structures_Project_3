import { Button, Card, CardActions, CardContent, Typography, Link } from "@mui/material";
import React from "react";


type BaseCardProperties = {
    title: string,
    price: number,
    link: string,
    store: string
}

export const BaseCard: React.FC<BaseCardProperties> = ({ title, price, link, store }: BaseCardProperties) => {
    
    // const router = useRouter();

    // const handleCard = () => {
    //     router.push(link)
    // }
    
    return <Card>

        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{price}</Typography>
        </CardContent>

        <CardActions>
            <Button variant="outlined"><Link underline = 'hover' color = 'black' href={link}>{store}</Link></Button>
        </CardActions>
    </Card>
}

//<Link className = "text-black" href={link}> how to 