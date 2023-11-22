import React, { useState } from 'react'
import { Modal, ModalBody, ModalOverlay, ModalContent } from '@chakra-ui/react' 
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs'
import CommentCard from './CommentCard'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { RiSendPlaneLine } from 'react-icons/ri'
import { FaRegComment } from 'react-icons/fa'
import './CommandModal.css'

const CommentModal = ({onClose, isOpen}) => {

  
    const [isPostLikes, setisPostLiked] = useState(false)
    const [isSaved,setisSaved] = useState(false)

    const handlesavePost = ()=>{
        setisSaved(!isSaved)
    }

    const handlePostLike=()=>{
        setisPostLiked(!isPostLikes)
    }
    

  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          
          <ModalBody>
            <div className=' flex h-[75vh] relative'>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/03/17/14/26/bear-7858736_1280.jpg" alt="" />
                </div>
                <div className=' w-[55%] pl-10 '>
                  <div className='flex justify-between items-center py-5'>
                  <div className='flex items-center'>
                        <div>
                            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_640.jpg" alt="" />
                        </div>
                        <div className='ml-2'>
                            <p>username</p>
                        </div>
                       
                    </div>


                    <BsThreeDots/>
                  </div>
                  <hr />
                        <div className='comment'>
                          {[1,1,1,1,1,1,1,1,1].map(()=><CommentCard/>)}
                      </div>
                  <div className='absolute bottom-0 w-[50%]'>
                    
                  <div className='flex justify-between items-center w-full py-5'>
                <div className='flex items-center space-x-2'>
                    {isPostLikes? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                    
                    <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                <div className='cursor-pointer'>
                    {isSaved? <BsBookmarkFill onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                    
                    
                </div>
            </div>
            <div className='w-full py-2'>
                <p>100 Likes</p>
                <p className='opacity-50 text-sm'>1 day ago</p>
            </div>

            
                <div className='flex items-center  '>
                    <BsEmojiSmile/>
                    <input className='commentInputs ' type="text" placeholder='Add a comment...' />
                </div>
            
                  </div>


                </div>
            </div>
           
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal