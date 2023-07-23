import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormLabel, Input, InputGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Comment } from '../comment/Comment'
import { Postimage } from '../postImage/Postimage'

import { Cmntfutter } from '../comment/Cmntfutter'

export const Drower = ({ onClose, isOpen ,state}) => {
 
  
    return (
      <>
       
        <Drawer
          isOpen={isOpen}
          placement='right'
        
          onClose={onClose}
          size={state?"xs":"md"}
          bg={"#F5F5F5"}
         
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
                {state?"Post an Image":"All comments"}
              
            </DrawerHeader>
  
            <DrawerBody>
                {state?<Postimage/>:<Comment/>}

             
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              {!state?<Cmntfutter/>:
              <>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Submit</Button>
              </>}
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }