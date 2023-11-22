import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360355_640.jpg" alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70m'>Follows you</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold cursor-pointer'>Follow</p>
    </div>
  )
}

export default SuggestionCard