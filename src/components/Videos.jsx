import { Stack, VStack, Text, Heading, Button, Image } from '@chakra-ui/react';
import React from 'react';
import Img1 from "../assets/videoplayer.png"
import { useState } from 'react';


const Videos = () => {
  const videosArr = [
    'https://www.youtube.com/watch?v=iSo9l950QLo&list=RDiSo9l950QLo&start_radio=1',
    'https://vimeo.com/766555009',
    'https://www.youtube.com/watch?v=DIHcy7KkBDw&list=PLt5mNkGuWcuWSUHxSzWP74IU9U4BTVLt0&index=2',
  ];
  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  return (
    <Stack direction={['column', 'row']} height={'100vh'}>
      <VStack w={'full'} p={'20'}>
      
       <video
          src={videosArr[0]}
          controls
          controlsList="nodownload"
          style={{ width: '100%' }}
        ></video>
      
       {/* <Image src={Img1}></Image> */}
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is the video for a short description about the project.
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'12'} spacing={'8'} overflowY={'auto'}>
{
  videosArr.map((items, index)=>{
    <Button variant={'ghost'} colorScheme = {'purple'} onClick={()=>setVideoSrc(items)}> Lecture {index+1}</Button>
  })
}
      </VStack>
    </Stack>
  );
};

export default Videos;
