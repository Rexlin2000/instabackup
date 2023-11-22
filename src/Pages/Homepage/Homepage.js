import React from 'react'
import StoryCircle from '../../components/Storys/StoryCircle'
import HomeRight from '../../components/HomeRignt/HomeRight'
import Post from '../../components/Post/Post'
import CreatePost from '../../components/Post/CreatePost'
import { useDisclosure } from '@chakra-ui/react'

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 p-2 rounded-md justify-start w-full'>
            <StoryCircle/>
          </div>
          <div className='space-y-10 w-full mt-10'>
            <Post/>
          </div>
        </div>
        <div className='w-[35%]'>
          <HomeRight/>
        </div>
      </div>
     
      </div>
  )
}

export default Homepage