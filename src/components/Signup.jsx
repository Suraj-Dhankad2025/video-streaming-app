import { Container,VStack,Heading,Input,Button,Link,Text,Avatar } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}  p={'16'}>
<form>
    <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} margin={'auto'} my={'16'}>
        <Heading>
            Video Hub
        </Heading>
        <Avatar alignSelf={'center'} boxSize={'40'}></Avatar>
        <Input placeholder={'Name'} type={'text'} required focusBorderColor={'purple.500'}/>
        <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'}/>
        <Input placeholder={'password'} type={'password'} required focusBorderColor={'purple.500'}/>
    <Button colorScheme={'purple'} type={'submit'}>
        Sign Up
    </Button>
   <Text textAlign={'right'}>Already Signed Up?{' '}
   <Button variant={'link'} colorScheme={'purple'}>
        <Link to={'/login'}>Login</Link>
    </Button>
   </Text>
    </VStack>
</form>

    </Container>
  )
}
export default Signup;