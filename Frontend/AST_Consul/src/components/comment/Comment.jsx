import { Avatar, Box, Button, Card, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import{BsReplyFill} from "react-icons/bs"

export const Comment = () => {
  return (
    <Box>
        <Card bg={"white"}m={"2%"} p={"20px"}>
            <Flex>
                <Box>
                    <Avatar src='"#' w={"40px"} h={"40px"}/>
                </Box>
                <Box>
                    <Text p={"0"} m={"auto"}>madarauchiha_2383</Text>
                </Box>
                <Spacer/>
                <Box>
                    <Button leftIcon={<BsReplyFill/>} bg={"none"} color={"blue"}>Reply</Button>
                </Box>
            </Flex>
            <Box pl={"10px"}>
                <Text noOfLines={3}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, esse.</Text>
            </Box>
        </Card>


    </Box>
  )
}
