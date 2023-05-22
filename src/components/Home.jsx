import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'upperase',
  p: '4',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.x1'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          m={'auto'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          allignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            padding={['4', '16']}
            textAlign={'center'}
          >
            A video library is an owned video channel that brands can use to
            manage all of their video content. Video libraries allow users to do
            things like manage privacy and permissions, easily update videos,
            and group like content together. Looking for a video, but can't
            remember the file name? No sweat. We automatically transcribe every
            video, and let you search by the captions. Simply enter some words
            from the video to find exactly what you’re looking for — fast.
            Viewers can view and comment on any videos or videos within folders
            that have been shared with them. Contributors can do everything
            viewers can do and upload videos to their own “private to me” space
            within their team account or edit videos and move them to their
            shared team folders. Admins can do everything 
            contributors can do
            and delete any video on the team account or share folders they have
            access to with the entire company.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    interval={2000}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Experience the best
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions}>
        This is nice
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.800'} color={'white'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.800'} color={'white'} {...headingOptions}>
        This is nice
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
