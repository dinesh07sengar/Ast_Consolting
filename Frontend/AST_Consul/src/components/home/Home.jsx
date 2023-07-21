import { Box, Button, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import { data } from "./data"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export const Home = () => {
    console.log(data)
    return (
        <Box>


            <Box width={"80%"} margin={"auto"}>
                <Box width={"50%"} m={"auto"}>
                    <Flex>
                        <Button>Gallery</Button>
                        <Button>My Album</Button>
                    </Flex>
                </Box>
                <Box>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3,1200:4 }}
                    >
                        <Masonry gutter="10px">
                            {data.map((ele, i) => {
                                return <Image key={i}
                                    src={ele.img}
                                    w={"100%"}
                                    display={'block'}
                                    alt='logo' />
                            })}

                        </Masonry>
                    </ResponsiveMasonry>
                </Box>
                {/* <Grid gridAutoFlow={"dense"} gap={"10px"} templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)'>
                {data.map((ele,i)=>{
                    return <GridItem key={i+1} ><Image src={ele.img} alt='img1'  verticalAlign={"middle"} display={"inline-block"} objectFit={"cover"} borderRadius={"5px"}/></GridItem>
                })}

            </Grid> */}


            </Box>
        </Box>

    )
}
