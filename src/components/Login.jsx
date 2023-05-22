import { Container,VStack,Heading,Input,Button,Link,Text } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'}  p={'16'}>
<form>
    <VStack alignItems={'stretch'} spacing={'8'} w={['full', '96']} margin={'auto'} my={'16'}>
        <Heading>
            Welcome Back
        </Heading>
        <Input placeholder={'Email'} type={'email'} required focusBorderColor={'purple.500'}/>
        <Input placeholder={'password'} type={'password'} required focusBorderColor={'purple.500'}/>
    <Button variant={'link'} alignSelf={'flex-end'}>
        <Link to={'/forgotpassword'}>Forgot Password</Link>
    </Button>
    <Button colorScheme={'purple'} type={'submit'}>
        <Link to={'/login'}>Login</Link>
    </Button>
   <Text textAlign={'right'}>New User?{' '}
   <Button variant={'link'} colorScheme={'purple'}>
        <Link to={'/signup'}>Sign Up</Link>
    </Button>
   </Text>
   
    </VStack>
</form>

    </Container>
  )
}

export default Login