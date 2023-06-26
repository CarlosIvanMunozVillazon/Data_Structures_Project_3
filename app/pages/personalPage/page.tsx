"use client"

import React from "react";
import { Box, Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import BasicLayout from "@/app/layouts/BasicLayout";
import { BaseForm } from "@/app/components/BaseForm";

import { apiUser } from "@/app/api/user/user";
import { useNotification } from "@/app/context/notification.context";

type NewUser = {
    userName: string,
    lastName: string,
    email: string,
    password: string,
}

export default function PersonalArea() {

    const { getSuccess, getError } = useNotification();

    const [userModified, setUserModified] = React.useState<NewUser>(
        {
            userName: "",
            lastName: "",
            email: "",
            password: "",
        }
    )



    const handleUserPut = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        apiUser.putUser(userModified.userName, userModified.lastName, userModified.email, userModified.password).then((response) => {
            getSuccess(response.data)
        }).catch((error) => {
            getError(error.message)
        })


    }

    const modifiedUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserModified(
            {// "..." allows us accessing different property's names
                ...userModified, [e.target.name]: e.target.value
            }
        )
    }



    //Thre buttons
    const handleUserDeleteion = () => {

        apiUser.deleteUser().then((response) => {
            getSuccess(response.data)
        }).catch((error) => {
            getError(error.message)
        })
    }

    const handleSessionStatus = () => {

        apiUser.getSessionStatus().then((response) => {
            getSuccess(response.data)
        }).catch((error) => {
            getError(error.message)
        })
    }

    const handleUserLogout = () => {

        apiUser.putLogOut().then((response) => {
            getSuccess(response.data)
        }).catch((error) => {
            getError(error.message)
        })
    }

    return (<>

        <BasicLayout>

            <Grid container
                component="main"
                alignItems="center"
                justifyContent="center"
                alignContent='center'
                direction="row"
                sx={{ width: "100%" }}
                spacing={2}
            >

                <Grid item
                    xs = {9}>

                    <BaseForm title='Modify your data' children={
                        <>
                            <TextField
                                name="userName"
                                type="text"
                                label="Name"
                                onChange={modifiedUserData}
                            />

                            <TextField
                                name="lastName"
                                type="text"
                                label="Last Name"
                                onChange={modifiedUserData}
                            />
                            <TextField
                                name="email"
                                type="text"
                                label="Email"
                                onChange={modifiedUserData}
                            />

                            <TextField
                                name="password"
                                type="password"
                                label="Password"
                                onChange={modifiedUserData}
                            />
                        </>
                    }

                        children2={
                            <Button type='submit' variant='contained'>
                                Modify
                            </Button>
                        }

                        children3={
                            <></>
                        }
                        submit={handleUserPut}></BaseForm>

                </Grid>


                <Grid item
                    xs = {3}>

                        <Paper >

                            <Stack direction = 'column'
                            spacing={2}>

                                
                                <Button onClick={handleUserLogout} variant = 'contained'>Log Out</Button>
                                <Button onClick={handleUserDeleteion} variant = 'contained'>Delete Account</Button>

                            </Stack>

                        </Paper>
                </Grid>

            </Grid>

        </BasicLayout>
    </>)

}




