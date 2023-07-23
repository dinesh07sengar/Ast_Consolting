import { Avatar, Box, Button, Flex, Heading, Image, Spacer, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {GiOppositeHearts} from "react-icons/gi"
import {AiOutlineLogin} from 'react-icons/ai'
import{FaBell} from "react-icons/fa"
import { Drower } from '../drower/Drower'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[state,setstate]=useState(false)
  const handleclick=()=>{
    setstate(true)
    onOpen()

  }
  return (
    <>
    
      <Box bg={useColorModeValue('white', 'gray.700')} boxShadow={"lg"}>
        <Flex >
          <Box>
            <Flex>
              <Box w={["50%","30%","20%","20%"]}><Image src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Logo-ast-consulting.jpg'/>
            </Box>
            <Link to="/"><Box m={"auto"} ml={"4"}>
              <Heading p={"0"} >Home</Heading>
            </Box></Link>
              
            </Flex>
            
          </Box>
          <Spacer/>
          
          <Box w={["90%","70%","50%","30%"]}>
            
            <Flex  h={"100%"}>
              <Box m={'auto'} >
                <Button leftIcon={<GiOppositeHearts/>} onClick={handleclick}>Post_Image</Button></Box>
              
              
              <Box m={'auto'}>
                <Link to="/login"><Button leftIcon={<AiOutlineLogin/>}>Signin</Button></Link></Box>

                <Box m={'auto'} display={["none","block","block","block"]}>
                  <FaBell/>
                </Box>
                <Box m={'auto'} display={["none","block","block","block"]}>
                  <Avatar src='https://rb.gy/b5k1o'/>
                </Box>
              
              
            </Flex>
          </Box>
        </Flex>
      </Box>
      {state?<Drower  onClose={onClose} isOpen={isOpen} state={state}/>:""}
      </>
   
  )
}

