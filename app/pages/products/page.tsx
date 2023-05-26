"use client"
import { characters } from "@/app/api/character";
import { ProductCard } from "@/app/components/ProductCard";
import BasicLayout from "@/app/layouts/BasicLayout";
import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import { CharacterType } from "./interface/Character.interface";

export default function Products() {

    const [allCharacters, setAllCharacters] = React.useState<CharacterType[] | null>(null);


    React.useEffect(() => { //allows loading info when the page is loaded.
        characters.getAll({ page: 1 }).then((r) => { //whithin then and catch we put arrow functions.
            setAllCharacters(r.data.results)
        }).catch((e) => {
            console.error(e);
        })
    }, [])

    //we can also load specific character info, by adding a character function.

    /*
    React.useEffect(() => {
        characters.getCharacterById({ id: 1 }).then((r) => {
            console.log(r.data);
        }).catch((Error) => {
            console.error(Error)
        })
    }, [])


{allCharacters?.length !== 0 ? (
                    <Grid item>
                        {
                            allCharacters!.map((character) => (
                                <ProductCard imageRef={character.image} name={character.name}
                                    species={character.species} description="generic card desc"
                                />

                            ))
                        }
                    </Grid>
                ) : ""}


    */

    return <>
        <BasicLayout>

            <Grid container
                component="div"
                alignItems="center"
                justifyContent="center"
                direction="row"
                sx={{ width: "100%" }}
            >

                <TextField sx={{ width: "60%", mt: 5 }} placeholder="What are you looking for?">              </TextField>
                <Button variant="contained" sx={{ height: "100%", mx: 3, mt: 5 }}>Search</Button>

            </Grid>


            <Container component = "main">
                {allCharacters?.length !== 0 ? (
                    <Grid container
                        component="div"
                        justifyContent="center"
                        alignItems="center"
                        direction="row"
                        spacing={1}
                        sx={{ width: "100%", height: "100%", mt: 0.7 }}>

                        {
                            allCharacters!.map((character) => (
                                <Grid item xs={3}>
                                    <ProductCard key={character.id} imageRef={character.image} name={character.name}
                                        species={character.species} description="generic card desc"
                                    />
                                </Grid>

                            ))
                        }
                    </Grid>
                ) : ""}
            </Container>
        </BasicLayout>
    </>
}