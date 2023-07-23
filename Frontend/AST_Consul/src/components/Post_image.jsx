import React, { useState } from 'react'
import { Box, Input,Button} from '@chakra-ui/react';
import axios from "axios"



export const Post_image = () => {
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [caption, setCaption] = useState('');

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
       
    
        // Send the image and form data to the server
        axios.post('http://localhost:4800/img/images', formData, {
        
          headers: {
            'Content-Type': 'multipart/form-data', // Important: Set the correct Content-Type for form data
          },
        })
        .then((response) => {
          // Handle success, e.g., show a success message or redirect to a different page
          console.log('Image uploaded successfully!', response.data);
        })
        .catch((error) => {
          // Handle error, e.g., display an error message
          console.error('Error uploading image:', error);
        });
      };
    
  
    return (
        <Box p={"2%"} m={"5%"} gap={"10px"}>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column-reverse",width:"30%"}}>
                <Input type="file" accept="image/*" onChange={handleImageChange} m={"1%"}/>
                <Input type="text" placeholder="Image Name" value={imageName} onChange={(e) => setImageName(e.target.value)} />
                <Input type="text" placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
    
                <Button type="submit">Upload Image</Button>
            </form>
        </Box>
    )
}
