import { Box, Button, Flex, Image, Input, Select, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import debounce from 'lodash.debounce';

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { ImageDetail } from '../imageDetail/ImageDetail'
import { useDispatch, useSelector } from "react-redux"
import { Customthunk } from '../../redux/Action/Action'
import { FaSearch } from "react-icons/fa"
import PreLoader from '../preloader/Preloader'

export const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let dispatch = useDispatch()
    const url = "http://localhost:4800/upload/"

    const [detail, setdetail] = useState(null)
    const [state, setstate] = useState(null)
    const [inpt, setinput] = useState("")
    const [active, setactive] = useState(true)
    const handleclick = (ele) => {
        console
        setdetail(ele)
        onOpen()
    }

    const data1 = useSelector((state) => state.Gallery)
    const albm = useSelector((state) => state.Album)
    useEffect(() => {
        setstate(data1)
    }, [data1])

    useEffect(() => {
        setstate(albm)
    }, [albm])
    const handlegallery = () => {
        setactive(true)
        setstate(data1)

    }
    console.log(albm)
    useEffect(() => {
        dispatch(Customthunk("GG"))

    }, [])
    const handlealbum = () => {
        dispatch(Customthunk("GA"))
        setactive(false)
    }
    const performSearch = debounce((query) => {
        const lowerCaseQuery = query.toLowerCase();
        let check = [];
        if(active){
            check=[...data1]
        }
        else{
            check=[...albm]
        }
        const results = check.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) ||
            item.caption.toLowerCase().includes(lowerCaseQuery)
        );
        setstate(results);
      }, 500);


    const handleSearchChange = (event) => {
        const { value } = event.target;
        setinput(value);
        // Call the debounced search function
        performSearch(value);
      };

    return (
        <>
            {state === null ? <PreLoader /> :



                <Box mt={"20px"} bg={"#F5F5F5"} pt={"30px"}>


                    <Box bg={"white"} w={"25%"} m={'auto'} borderRadius={"15px"}>
                        <Flex>
                            <Input type='text' placeholder='search....' borderLeftRadius={"15px"} borderRight={"transparent"}  value={inpt} onChange={handleSearchChange}/>
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
                                <Button borderTopRadius={"50px"} border={active ? "1px solid white" : "1px solid black"} bg={active ? "black" : "white"} color={active ? "white" : "black"} w={"50%"} onClick={handlegallery}>Gallery</Button>
                                <Button borderTopRadius={"50px"} w={"50%"} bg={active ? "white" : "black"} color={!active ? "white" : "black"} onClick={handlealbum}>My Album</Button>
                            </Flex>
                        </Box>
                        <Box>
                            {state.length < 0 ? <Box w={"50%"} m="auto"><Image src='https://rb.gy/a9015' alt="empty" /></Box> :
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
                                >
                                    <Masonry gutter="5px">
                                        {state?.map((ele, i) => {
                                            return <Image key={i}
                                                src={`http://localhost:4800/upload/${ele.imageUrl}`}
                                                w={"100%"}
                                                display={'block'}
                                                onClick={() => handleclick(ele)}
                                                transition={"0.3s"}
                                                cursor={"pointer"}
                                                _hover={{ transform: "translate(0,-10px)" }}
                                                alt={i} />
                                        })}

                                    </Masonry>
                                </ResponsiveMasonry>}

                        </Box>



                    </Box>
                    {detail === null ? "" : <ImageDetail onClose1={onClose} isOpen1={isOpen} detail={detail} />}
                </Box>
            }
        </>

    )
}
