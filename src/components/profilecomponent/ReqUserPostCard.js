import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import './ReqUserPostCard.css'


const ReqUserPostCard = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
        {/* <div className='post w-60 h-60'>
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="" />
            <img className='cursor-pointer' src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg" alt="" />
            <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>10</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>30</span>
                    </div>
                </div>
            </div>
        </div> */}
        <div>
            <div className='post w-60 h-60 '>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/11/06/06/50/parrot-8368951_640.png" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>240</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>70</span>
                    </div>
                </div>
            </div>

            </div>
        </div>

        <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/13/16/42/tree-8313094_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>15k</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>720</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/20/11/40/plants-8264659_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>50</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>2</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/12/12/54/woman-8310743_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>1K</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>650</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/23/14/37/bee-8336245_640.png" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>165</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>95</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/19/14/19/gibbon-8326845_640.png" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>165k</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>950</span>
                    </div>
                </div>
            </div>

            </div>

            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/20/17/19/pumpkin-8329917_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>288</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>90</span>
                    </div>
                </div>
            </div>

            </div>
            
            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/10/11/12/04/woman-8308494_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>25k</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>110</span>
                    </div>
                </div>
            </div>

            </div>
            
            <div className='post w-60 h-60'>
                <img className='cursor-pointer h-auto max-w-full rounded-lg' src="https://cdn.pixabay.com/photo/2023/09/14/13/58/spider-8253028_640.jpg" alt="" />
                
                <div className='overlay'>
                <div className='overlay-text flex justify-between'>
                    <div>
                        <AiFillHeart></AiFillHeart> <span>60k</span>
                    </div>
                    <div>
                        <FaComment></FaComment> <span>1k</span>
                    </div>
                </div>
            </div>

            </div>

            
    </div>
    
  )
}

export default ReqUserPostCard