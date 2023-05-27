import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type BaseCardProperties = {
    title: string,
    price: string,
    link: string,
    store: string
}

export const BaseCard: React.FC<BaseCardProperties> = ({ title, price, link, store }: BaseCardProperties) => {
    return <Card>

        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{price}</Typography>
        </CardContent>

        <CardActions>
            <Button variant="outlined" ><Link className = "text-black" href={link}>{store}</Link></Button>
        </CardActions>
    </Card>
}