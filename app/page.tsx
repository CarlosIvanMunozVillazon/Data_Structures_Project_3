"use client"

import { Button, Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from "next/image"
import Link from 'next/link'
import {useNotification } from './context/notification.context'



export default function Home() {

  const { getError } = useNotification();

  const handleClick = () => {
    getError('Hello niggers')
  }


  return (
    <>
      <Container component="main" maxWidth="lg" >

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
            <Link href="/register">
              <Button variant="contained" type="button">Get Started</Button>
            </Link>
          </Grid>

          <Grid item>
            <Button variant='contained' type="button" onClick={handleClick}>Notification Test</Button>

          </Grid>
        </Grid>

      </Container>
    </>
  )
}
