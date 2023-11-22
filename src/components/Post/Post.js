import React, { useState, useRef } from 'react'
import {BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots} from 'react-icons/bs'
import './Post.css'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaRegComment } from 'react-icons/fa'
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from '../Comment/CommentModal'
import { useDisclosure } from '@chakra-ui/react'
import vid1 from '../Reels/Videos/vid-1.mp4'



const Post = () => {
    const [showDropDown, setshowDropDown]=useState(false)
    const [isPostLikes, setisPostLiked] = useState(false)
    const [isSaved,setisSaved] = useState(false)
    const {isOpen, onOpen, onClose } = useDisclosure()

    const handlesavePost = ()=>{
        setisSaved(!isSaved)
    }

    const handlePostLike=()=>{
        setisPostLiked(!isPostLikes)
    }
    const handleClick=()=>{
        setshowDropDown(!showDropDown);

    }

    const handleopenCommentModal = ()=>{
        onOpen()
    }


    {/** */}

    
        const [isVideo, setisVideo] = useState(false)
        
        const vidRef = useRef()
        const onVideoClick = () =>{
            if(isVideo){
                vidRef.current.pause();
                setisVideo(false)
            }else {
                vidRef.current.play();
                setisVideo(true)
            }
        }

  return (
    <div className=''>
        <div className='border rounded-md w-full '>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/08/12/13/59/cat-8185712_1280.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>John</p>
                        <p className='font-thin text-sm'>London</p>
                    </div>
                </div>

                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div  className='dropdown content'>
                       {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                    
                </div>

            </div>
            <div className='w-full'>
                        <img className='w-full' src="https://cdn.pixabay.com/photo/2023/03/17/14/26/bear-7858736_1280.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center w-full px-5 py-5'>
                <div className='flex items-center space-x-2'>
                    {isPostLikes? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                    
                    <FaRegComment onClick={handleopenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                <div className='cursor-pointer'>
                    {isSaved? <BsBookmarkFill onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                    
                    
                </div>
            </div>

            <div className='w-full py-2 px-5'>
                <p >100 Likes</p>
                <p className='text-Slate-950'>Cute bear vector graphic design</p>
                <p className='opacity-50  cursor-pointer'>more</p>
                <p className='opacity-50 py-2 cursor-pointer'>view all 25 comments</p>
            </div>
            <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                <input className='commentInput' type="text" placeholder='Add a comment...' />
                    <BsEmojiSmile/>
                    
                </div>
            </div>
        </div>


        {/** */}
        <br />
        <br />
        <div className='border rounded-md w-full  '>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_640.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>David</p>
                        <p className='font-thin text-sm'>USA</p>
                    </div>
                </div>

                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div  className='dropdown content'>
                       {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                    
                </div>

            </div>
            <div className='w-full'>
                        
                        <video onClick={onVideoClick} className='video-player' ref={vidRef} src={vid1} loop />
            </div>
            <div className='flex justify-between items-center w-full px-5 py-5'>
                <div className='flex items-center space-x-2'>
                    {isPostLikes? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                    
                    <FaRegComment onClick={handleopenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                <div className='cursor-pointer'>
                    {isSaved? <BsBookmarkFill onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                    
                    
                </div>
            </div>

            <div className='w-full py-2 px-5'>
                <p>125,563 Likes</p>
                <p className='text-Slate-950'>muyal animation graphic design</p>
                <p className='opacity-50  cursor-pointer'>more</p>
                <p className='opacity-50 py-2 cursor-pointer'>view all 2553 comments</p>
            </div>
            <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                    
                    <input className='commentInput' type="text" placeholder='Add a comment...' />
                    <BsEmojiSmile/>
                </div>
            </div>
        </div>

        {/** */}
        <br />
        <br />
        <div className='border rounded-md w-full '>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_640.jpg" alt="" />
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>John</p>
                        <p className='font-thin text-sm'>London</p>
                    </div>
                </div>

                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick}/>
                    <div  className='dropdown content'>
                       {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                    
                </div>

            </div>
            <div className='w-full'>
                        <img className='w-full' src="https://cdn.pixabay.com/photo/2016/11/23/00/33/man-1851469_640.jpg" alt="" />
            </div>
            <div className='flex justify-between items-center w-full px-5 py-5'>
                <div className='flex items-center space-x-2'>
                    {isPostLikes? <AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-700' onClick={handlePostLike}/>: <AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer' onClick={handlePostLike}/>}
                    
                    <FaRegComment onClick={handleopenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                    <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
                </div>
                <div className='cursor-pointer'>
                    {isSaved? <BsBookmarkFill onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>: <BsBookmark onClick={handlesavePost} className='text-xl hover:opacity-50 cursor-pointer'/>}
                    
                    
                </div>
            </div>

            <div className='w-full py-2 px-5'>
                <p>5032 Likes</p>
                <p className='text-Slate-950'>John New look #photograper</p>
                <p className='opacity-50  cursor-pointer'>more</p>
                <p className='opacity-50 py-2 cursor-pointer'>view all 86 comments</p>
            </div>
            <div className='border border-t w-full'>
                <div className='flex w-full items-center px-5'>
                    
                    <input className='commentInput' type="text" placeholder='Add a comment...' />
                    <BsEmojiSmile/>
                </div>
            </div>
        </div>

        <CommentModal handlePostLike={handlePostLike} onClose={onClose} isOpen={isOpen} handlesavePost={handlesavePost} isPostLikes={isPostLikes} isSaved={isSaved}/>
    </div>
  )
}

export default Post