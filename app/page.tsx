"use client"
import { Navbar } from './components/Navbar'
import { Container } from '@mui/material'


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Container sx = {{mt:9}} maxWidth = "xl">
      </Container>
    </main>
  )
}
