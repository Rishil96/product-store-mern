import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    // A Box is a versalite component from Chakra UI that allows us to add styling directly to the component kind of like div from HTML
    <Box minH={"100vh"}>  
      {/* NavBar */}
      <NavBar />
      {/* Pages */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}

export default App
