import React from 'react'
import { TbBrandThreads, TbCircleDashed } from "react-icons/tb"

const ProfilUserDetails = () => {


  return (
    <div className='py-10 w-full' >
        <div className='flex items-center'>
            <div className='w-[15%]'>
                <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2022/08/08/16/52/man-7373140_640.jpg" alt="" />
            </div>
            <div className='space-y-5 '>
                <div className='flex space-x-10 items-center'>
                    <p>Rex_2000</p>
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-white    ">Edit Profile</button>
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  dark:text-white    ">View Archive</button>
                        
                    <TbCircleDashed className='cursor-pointer '></TbCircleDashed>
                </div>
                <div className='flex space-x-10'>
                    <div>
                        <span className='font-semibold mr-2'>9</span>
                        <span>post</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>504k</span>
                        <span>follower</span>
                    </div>
                    <div>
                        <span className='font-semibold mr-2'>20</span>
                        <span>following</span>
                    </div>

                </div>
                <div >
                    <p className='semi-semibold'>Rexlin</p>
                    <div className='flex items-center cursor-pointer pb-5 p-1 '>
                
                        <TbBrandThreads className="text-2"/>
                        <p className='ml-2'> Rex_2000 </p>

                    </div>
                    <p className='font-thin text-sm'>Welcome to My Profile 😍 | 🌱 Nature Lover | 🏋️Gym LøVèr</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProfilUserDetails