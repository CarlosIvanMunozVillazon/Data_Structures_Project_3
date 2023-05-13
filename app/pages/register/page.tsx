"use client"

import React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import { useNotification } from '@/app/context/notification.context'
import { RegisterValidation } from '@/app/helpers/validateForm'


type NewUser = {
    userName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}


export default function Register() {

    const { getError, getSuccess } = useNotification();

    const [newUser, setNewUser] = React.useState<NewUser>(
        {
            userName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    )

    const newUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser(
            {
                ...newUser, [e.target.name]: e.target.value
            }
        )
    };

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        RegisterValidation.validate(newUser).then(() => {

            getSuccess(JSON.stringify(newUser))
        
        }). catch ((error) => {
        
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

                                    <TextField fullWidth
                                        name="confirmPassword"
                                        type="password"
                                        label="Confirm Password"
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
