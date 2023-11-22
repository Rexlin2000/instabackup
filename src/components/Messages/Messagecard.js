import React from 'react'
import './Messagepost.css'

const Messagecard = () => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_640.jpg" alt="" />
            <div className='ml-3'>
                <p>Code_With_rex</p>
                <p className='opacity-70'>Active 21h ago</p>
            </div>
        </div>
    </div>
  )
}

export default Messagecard