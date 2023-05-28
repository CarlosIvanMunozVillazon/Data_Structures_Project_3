"use client"

import { Button, Container, Divider, Grid, Stack } from '@mui/material'
import Image from "next/image"
import Link from 'next/link'
import Header from './components/Header'
import { Navbar } from './components/Navbar'
import React from 'react'


export default function Home() {

  return (
    <>
      <Navbar button1Direction='/pages/login' button2Direction='/pages/register' />
      <Container component="main" maxWidth="xl">
        <Header title='Welcome to SharpSight' description='A web apliccation for price comparison' />

        <Divider sx={{ mt: 2, mb: 4 }}></Divider>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >

          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2.5}
              sx={{ height: "100%" }}
            >
              <Grid item >
                <Image
                  className="border-slate pb-8"
                  src="/images/AppLogo.png"
                  width={275}
                  height={275}
                  alt="AppLogo"
                  priority={true} />
              </Grid>

              <Grid item
                sx={{ width: "60%" }}>
                <Link href="/pages/search">
                  <Button sx={{ width: "100%" }} variant="contained">
                    Get Started </Button>
                </Link>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
