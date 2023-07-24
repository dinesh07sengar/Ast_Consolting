import React, { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import { LiaDownloadSolid } from "react-icons/lia"
import { GrAdd } from "react-icons/gr"
import { AiOutlineLike } from "react-icons/ai"
import { FcShare } from "react-icons/fc"
import { FaComments } from "react-icons/fa"
import { Link } from 'react-router-dom'
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
  ModalCloseButton, Button, Text, Box, Image, Heading, Flex, Avatar, VStack, Menu, MenuButton, MenuItem, MenuList, Spacer, useDisclosure
} from '@chakra-ui/react'
import { Drower } from '../drower/Drower'
import {useDispatch} from "react-redux"
import { AlbumId, Customthunk } from '../../redux/Action/Action'


export const ImageDetail = ({ onClose1, isOpen1, detail }) => {
  const[state,setstate]=useState(true)
  let dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleclick=()=>{
    setstate(false)
    dispatch(AlbumId(detail._id))
    console.log("yha aya")
    onOpen()
  }
  const handlealbum=()=>{
    console.log(detail._id)
    dispatch(Customthunk("CA",detail._id))

  }
  console.log(state)

  return (
    <div>
      <Modal isOpen={isOpen1} onClose={onClose1}
        data-cy="chakra-modal">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              <Box>
                <Avatar src='#' />
              </Box>
              <VStack gap={"0"} m={"0"} p={"0"} alignItems={"left"}>

                <Heading m={"0"} p={"0"} size={"md"}>User_uchiha007</Heading>
                <Text p={0} fontSize={"sm"}>hfghdfh</Text>
              </VStack>
              <Spacer />
              <Menu isLazy>
                <MenuButton
                  px={4}
                  py={2}
                  transition='all 0.2s'
                  borderRadius='none'
                  borderWidth='none'
                  borderColor={"transparent"}
                  _hover={{ borderColor: "transparent" }}

                >
                  <BsThreeDotsVertical />
                </MenuButton>
                <MenuList>
                <a href={`http://localhost:4800/upload/${detail.imageUrl}`} download ><MenuItem icon={<LiaDownloadSolid />}>Download</MenuItem></a>
                  <MenuItem icon={<GrAdd />} onClick={handlealbum}>Add to album</MenuItem>

                </MenuList>
              </Menu>
            </Flex>
          </ModalHeader>
          <ModalCloseButton position="absolute"
            right={1}
            top={20}
            color={"white"}

            onClick={onClose1} />

          <ModalBody p={"0"}>

            <Image src={`http://localhost:4800/upload/${detail.imageUrl}`} w={"100%"} />

          </ModalBody>


          <ModalFooter>
            <Button><AiOutlineLike /></Button>
            <Spacer />
            <Button bg={"none"} onClick={handleclick} ><FaComments /></Button>
            <Spacer />
            <Button bg={"none"} ><FcShare /></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {state?"":<Drower onClose={onClose} isOpen={isOpen} state={state} />}
    </div>
  )
}
