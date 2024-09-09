import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { useColorModeValue } from '@chakra-ui/react'

function App() {

  return (
    // A Box is a versalite component from Chakra UI that allows us to add styling directly to the component kind of like div from HTML
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>  
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
