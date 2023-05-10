"use client"

import React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'


type NewUser = {
    userName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}


export default function Register() {

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
        console.log({ ...newUser });
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
                        <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
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
                                            required
                                            onChange={newUserData}
                                        />

                                        <TextField
                                            name="lastName"
                                            type="text"
                                            label="Last Name"
                                            required
                                            onChange={newUserData}
                                        />
                                    </Stack>


                                    <TextField fullWidth
                                        name="email"
                                        type="text"
                                        label="Email"
                                        required
                                        onChange={newUserData}
                                    />

                                    <TextField fullWidth
                                        name="password"
                                        type="password"
                                        label="Password"
                                        required
                                        onChange={newUserData}
                                    />

                                    <TextField fullWidth
                                        name="confirmPassword"
                                        type="password"
                                        label="Confirm Password"
                                        required
                                        onChange={newUserData}
                                    />

                                    <Button fullWidth type="submit" variant="contained">Register</Button>
                                </Stack>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
