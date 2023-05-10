"use client"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

type LoginInformation = {
  email: string,
  password: string
}

export default function Login() {

  //Valores para el atributo direction:
  //"row" : los elementos se organizan en una sola fila, uno al lado del otro.
  //"column" : los elementos se organizan en una sola columna, uno debajo del otro.
  //"row-reverse" : lo mismo que el row pero de derecha a izquierda.
  //"column-reverse" : lo mismo que el column pero de abajo hacia arriba. 

  //Valores para el atributo justify content:
  //""
  //""
  //""
  //""

  //minHeight : ayuda a establecer la altura minima de los componentes dentro del grid, es decir que si un componente es mas pequeño de que la altura minima
  //min-height lo ajusta automaticamente para que ocupe el total de la altura permitida.
  //maxHeight : establece la altura maxima que los elementos pueden tener, en caso de excederla. Fucniona similar al min Height.
  //se agrega un scrollbar para que se pueda ver todo el contenido.

  //alignItems : se usa para controlar alineación VERTICAL. ** CON ESTE PUEDO PONER COSAS EN TODO EL CENTRO DE LA PANTALLA (BAJARLAS)**
  //justifyContent : se usa para controlar alineación HORIZONTAL. ** CON ESTE PUEDO HACER LO MISMO (CORRER HACIA LA DERECHA) **

  //STACK : con este componente puedo tener separaciones iguales entre componentes.

  const [logIn, setLogIn] = React.useState<LoginInformation>( //con esto solo vamos a poder validar usuarios con email no con user names.
    {
      email: "",
      password: ""
    }
  )

  const loginData = (e: React.ChangeEvent<HTMLInputElement>) => {//esta funcion coge los datos del formulario y los establece dentro del objeto que definimos
    //arriba con el hook.
    setLogIn({ //aqui aplicamos la función del hook para pasarle la info. al objeto.
      ...logIn, [e.target.name]: e.target.value
    })
    //"...login" : me respeta lo que se haya puesto en el anterior input.
    //"[e.target.name]" : me apunta hacia el componente con un nombre que yo le doy.
    //"e.target.value" : es lo que se vaya metido dentro del campo de texto, me lo guarda.
  }

  //los nombres tiene que ser iguales al del tipo que se estableció arriba "LoginInformation"

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log(logIn);
  }


  return (
    <>
      <Container component = "main" maxWidth="xl">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: "100vh"
          }}
        >
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <Typography variant="h4">Log-in</Typography>
                  <TextField fullWidth
                    name="email"
                    label="E-mail"
                    type="e-mail"
                    required
                    onChange={loginData}
                  />
                  <TextField fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    required
                    onChange={loginData}
                  />
                  <Button fullWidth type="submit" variant="contained">Log-in</Button>
                </Stack>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}