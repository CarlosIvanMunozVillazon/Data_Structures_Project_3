"use client"
//how to get info from form
import React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useNotification } from '@/app/context/notification.context'
import { RegisterValidation } from '@/app/helpers/validateForm'
import { apiUser } from '@/app/api/user/user'
import { MessageInterface } from '@/app/interface/Message.interface'

//first we declare the type of object we want to extract from the form
type NewUser = {
    userName: string,
    lastName: string,
    email: string,
    password: string,
}


export default function Register() {

    const [mensaje, setMensaje] = React.useState<MessageInterface>({
        message: ''
      })

    const { getError, getSuccess } = useNotification();
//second we declare our useState array where we are going to save the information
    const [newUser, setNewUser] = React.useState<NewUser>(
        {
            userName: "",
            lastName: "",
            email: "",
            password: "",
        }
    )
//third, we use a function for getting information about the change event that ocurr within the form
    const newUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser(
            {// "..." allows us accessing different property's names
                ...newUser, [e.target.name]: e.target.value
            }
        )
    };
//at the end we handle the submit of our form in order to process the data we just entered in the form
    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        // RegisterValidation.validate(newUser).then(() => {

        //     getSuccess(JSON.stringify(newUser))
        
        // }). catch ((error) => {
        
        //     getError(error.message)
        
        // })

        apiUser.postUser(newUser.userName, newUser.lastName, newUser.email, newUser.password).then((response) => {
            setMensaje(response.data)
            getSuccess(mensaje.message)
        }).catch((error) => {
            getError(error.message)
        })


    };

    return (
        <>
            <Container component="main" maxWidth="xl">
                <Grid container
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                    sx={{ minHeight: "100vh" }}
                >
                    <Grid item>
                        <Paper>
                            <Box component="form" onSubmit={handleSubmit}>

                                <Stack spacing={2}>

                                    <Typography variant="h4">
                                        Sign up
                                    </Typography>

                                    <Stack direction="row" spacing={1}>
                                        <TextField
                                            name="userName"
                                            type="text"
                                            label="Name"
                                            onChange={newUserData}
                                        />

                                        <TextField
                                            name="lastName"
                                            type="text"
                                            label="Last Name"
                                            onChange={newUserData}
                                        />
                                    </Stack>


                                    <TextField fullWidth
                                        name="email"
                                        type="text"
                                        label="Email"
                                        onChange={newUserData}
                                    />

                                    <TextField fullWidth
                                        name="password"
                                        type="password"
                                        label="Password"
                                        onChange={newUserData}
                                    />

                                    <Button fullWidth type="submit" variant="contained">Register</Button>

                                    <Link href="/pages/login">
                                        <Typography sx={{ color: "blue" }}>Already have an account?</Typography>
                                    </Link>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
