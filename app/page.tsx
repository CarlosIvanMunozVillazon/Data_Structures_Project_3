"use client"
import { Navbar } from './components/Navbar'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Container sx={{ mt: 9 }} maxWidth="xl">
        <Box display="flex" flexDirection="column" maxWidth="xl" alignItems="center">
          <Typography variant="h1" >Main application page</Typography>
        </Box>
        <Typography variant = "body1">This is my main application page, enjoy it.</Typography>
      </Container>
    </main>
  )
}
