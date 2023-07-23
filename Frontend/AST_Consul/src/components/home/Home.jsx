import { Box, Button, Flex, Image, Input, Select, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { data } from "./data"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { ImageDetail } from '../imageDetail/ImageDetail'
import { useDispatch } from "react-redux"
import { Customthunk } from '../../redux/Action/Action'
import { FaSearch } from "react-icons/fa"

export const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let dispatch = useDispatch()

    const [detail, setdetail] = useState(null)
    const handleclick = (ele) => {
        setdetail(ele)
        onOpen()
    }
    useEffect(() => {
        dispatch(Customthunk("GG"))
       
    })
    console.log(data)
    return (
        <Box mt={"20px"} bg={"#F5F5F5"} pt={"30px"}>

            <Box bg={"white"} w={"25%"} m={'auto'} borderRadius={"15px"}>
                <Flex>
                    <Input type='text' placeholder='search....' borderLeftRadius={"15px"} borderRight={"transparent"} />
                    <Button m={"auto"} bg={"white"} borderRightRadius={"15px"}><FaSearch /></Button>

                </Flex>


            </Box>
            <Box w={"15%"} m={"auto"} mt={"1%"}>
                <Select bg={"white"}>
                    <option value={""}>sort by</option>
                    <option value={"latest"}>latest</option>
                    <option value={"oldest"}>oldest</option>
                </Select>
            </Box>


            <Box width={"100%"} >
                <Box width={"40%"} borderTopRadius={"50px"} m={"auto"} pt={"1%"} pb={"1%"}>
                    <Flex w={"100%"} borderTopRadius={"50px"} gap={"3px"} borderBottom={"1px solid"}>
                        <Button borderTopRadius={"50px"} border={"1px solid black"} bg={'white'} w={"50%"}>Gallery</Button>
                        <Button borderTopRadius={"50px"} w={"50%"} bg={"white"}>My Album</Button>
                    </Flex>
                </Box>
                <Box>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
                    >
                        <Masonry gutter="5px">
                            {data.map((ele, i) => {
                                return <Image key={i}
                                    src={ele.img}
                                    w={"100%"}
                                    display={'block'}
                                    onClick={() => handleclick(ele)}
                                    transition={"0.3s"}
                                    cursor={"pointer"}
                                    _hover={{ transform: "translate(0,-10px)" }}
                                    alt='logo' />
                            })}

                        </Masonry>
                    </ResponsiveMasonry>
                </Box>



            </Box>
            {detail === null ? "" : <ImageDetail onClose1={onClose} isOpen1={isOpen} detail={detail} />}
        </Box>

    )
}
