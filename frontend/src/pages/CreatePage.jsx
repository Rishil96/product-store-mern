import { Container, VStack, Heading, Box, useColorModeValue, Input, Button } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

const CreatePage = () => {
  
  const [ newProduct, setNewProduct ] = useState(
    {
      name: "",
      price: "",
      image: ""
    }
  );

  const handleAddProduct = () => {
    console.log(newProduct);
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        {/* Page Heading */}
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        {/* Page Form */}
        <Box
          w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            {/* Add Product Button */}
            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage;
