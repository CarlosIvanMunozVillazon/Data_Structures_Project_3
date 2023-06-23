import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { UrlObject } from "url";

type BaseCardProperties = {
    title: string,
    price: number,
    link: Url,
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
            <Button variant="outlined"><Link href={link}></Link>{store}</Button>
        </CardActions>
    </Card>
}

//<Link className = "text-black" href={link}> how to 