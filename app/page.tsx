"use client"

import { Button, Container, Divider, Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from "next/image"
import Link from 'next/link'
import Header from './components/Header'
import { Navbar } from './components/Navbar'
import React from 'react'

/* Possibly needed code
<Grid
container
alignItems="center"
justifyContent="center"
direction="column"
sx={{ minHeight: "90vh" }}
spacing={5}
>
<Grid item>
  <Image
    className="border-slate pb-8"
    src="/images/AppLogo.png"
    width={300}
    height={300}
    alt="AppLogo"
    priority={true} />
</Grid>

<Grid item>
  <Typography variant='h1'>Welcome to SharpSight</Typography>
</Grid>

<Grid item >
  <Typography variant="h4" fontWeight="light">A web application for price comparison</Typography>
</Grid>

<Grid item >
  <Link href="/pages/register">
    <Button variant="contained" type="button">Get Started</Button>
  </Link>
</Grid>
</Grid>

</Container>
*/

export default function Home() {

  return (
    <>
      <Navbar button1Direction='/pages/login' button2Direction='/pages/register' />
      <Container component="main" maxWidth="xl">
        <Header title='Welcome to SharpSight' description='A web aplication for price comparison' />

        <Divider sx={{ mt: 2, mb: 4 }}></Divider>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center">

          <Grid item xs={3.5}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
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
            </Grid>

          </Grid>

          <Grid item xs={9}>
            <Grid container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ maxHeight: "100%" }}
            >
            </Grid>
          </Grid>


        </Grid>
      </Container>
    </>
  )
}
