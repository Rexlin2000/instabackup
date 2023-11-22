import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CommentCard = () => {

    const handleLikeCommend =() =>{
        setisCommentLiked(!isCommentLiked)
    }

    const [isCommentLiked, setisCommentLiked] = useState()

  return (
    <div>
        <div className='flex items-center justify-between py-5'>
            <div className='flex items-center'>
                <div>
                    <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/07/05/39/spider-8371057_640.jpg" alt="" />
                </div>
                <div className='ml-3'>
                    <p>
                        <span className='font-semibold'>username</span>

                        <span className='ml-2'>nice Post</span>
                    </p>
                    <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>1 min ago</span>
                        <span>23 Likes</span>
                    </div>
                </div>
            </div>

    {isCommentLiked?(<AiFillHeart onClick={handleLikeCommend} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/>): 
    (<AiOutlineHeart onClick={handleLikeCommend} className='text-xs hover:opacity-50 cursor-pointer' />)}
        </div>
    </div>
  )
}

export default CommentCard