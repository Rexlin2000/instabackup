import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BiMessageRoundedDetail } from 'react-icons/bi'


const Messaging = () => {
  return (
    <div className='py-20 '>
    <Card align='center '>
    <div className='justify-items-center   flex justify-center '>
    <BiMessageRoundedDetail className='flex h-16 w-16 content-center '/>
                            
    </div>

    <CardHeader>
        <Heading size='md'> Your messages</Heading>
    </CardHeader>
    <CardBody>
        <Text>Send private photos and messages to a friend or group</Text>
    </CardBody>
    <CardFooter>
        <Button colorScheme='blue'>Send Message</Button>
    </CardFooter>
    </Card>
    </div>
  )
}

export default Messaging