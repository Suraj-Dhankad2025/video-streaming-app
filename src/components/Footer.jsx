import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'} textAlign={'center'}>
            Subscribe to Video Hub
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here... "
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
            />
            <Button
              p={'0'}
              variant={'ghost'}
              colorScheme={'purple'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} 
        borderLeft={'none, 1px solid white'}
        borderRight={'none, 1px solid white'}
        >
        <Heading textAlign={'center'} textTransform={'uppercase'}>
          VIDEO HUB
        </Heading>
        <Text>All Rights Reserved</Text>
        </VStack>
        <VStack w={'full'} >
        <Heading size={'md'} textTransform={'uppercase'}>
        Social Media
        </Heading>
        <Button variant={'link'} colorScheme={'red'}>
          <a href="_blank">Youtube</a>
        </Button>
        <Button variant={'link'} colorScheme={'linkedin'}>
          <a href="_blank">LinkedIn</a>
        </Button>
        <Button variant={'link'} colorScheme={'twitter'}>
          <a href="_blank">Twitter</a>
        </Button>
        <Button variant={'link'} colorScheme={'gray'}>
          <a href="_blank">GitHub</a>
        </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
