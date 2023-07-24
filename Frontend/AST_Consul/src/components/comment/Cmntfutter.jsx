import React, { useState } from 'react'
import{useDispatch} from 'react-redux'
import { Customthunk } from '../../redux/Action/Action'
import { Avatar, Box, Button, Flex, Input } from '@chakra-ui/react'

export const Cmntfutter = () => {

    const[cmnt, setcmnt]=useState(null)
    let dispatch = useDispatch()
    const handleclick=()=>{
      let obj={cmnt}
        dispatch(Customthunk("CC",obj))
  
      }
    return (
        <Box m={"auto"} >
            <Flex gap={"10px"} w={"100%"} bg={"white"}><Avatar src='#'/>
                <Input _placeholder={"enter comment..."} w={"100%"} borderRadius={"15px"} onChange={(e) => setcmnt(e.target.value)} />
                <Button onClick={handleclick}>Send</Button>
            </Flex>
        </Box>
    )
}
