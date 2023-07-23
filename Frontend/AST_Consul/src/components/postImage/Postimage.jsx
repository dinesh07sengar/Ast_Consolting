import { Box, FormLabel, Input, Stack, Textarea,Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Customthunk } from '../../redux/Action/Action';

export const Postimage = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [caption, setCaption] = useState('');
  let dispatch = useDispatch();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(e.target.files)
    setImage(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to hold the image and other form data
    const formData = new FormData();
    formData.append('image', image);
    formData.append('imageName', imageName);
    formData.append('caption', caption);
    dispatch(Customthunk("CP", formData))

  }



  return (
    <Box>
      <Stack spacing='24px' as={"form"} onSubmit={handleSubmit}>
        <Box>
          <FormLabel htmlFor='username'>Name</FormLabel>
          <Input
            value={imageName} onChange={(e) => setImageName(e.target.value)}

            id='username'
            placeholder='Please enter name'
          />
        </Box>

        <Box>
          <FormLabel htmlFor='url'>file</FormLabel>

          <Input
            type='file'
            id='url'
            accept="image/*" onChange={handleImageChange}
            placeholder='Please enter domain'
          />

        </Box>

        <Box>
          <FormLabel htmlFor='desc'>caption</FormLabel>
          <Textarea id='desc' value={caption} onChange={(e) => setCaption(e.target.value)} />
        </Box>
        <Box>
          <Button type='submit'>Upload Image</Button>
        </Box>
      </Stack>

    </Box>
  )
}
