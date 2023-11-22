import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/29/01/12/profile-pic-7884381_640.png" alt="" />
            <div className='ml-3'>
                <p>Code_rex</p>
                <p className='opacity-70'>Nelson</p>
            </div>
        </div>
    </div>
  )
}

export default SearchUserCard