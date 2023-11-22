import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark} from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'


const ReqUserPostPart = () => {
    const [activeTab, setactiveTab] = useState()

    const tabs =[
        {tab:"Post", icon:<AiOutlineTable></AiOutlineTable>, activeTab:""},
        {tab:"Reels", icon:<RiVideoAddLine></RiVideoAddLine>},
        {tab:"Saved", icon:<BiBookmark />},
        {tab:"Tagged", icon:<AiOutlineUser></AiOutlineUser>}
    ]
  return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item)=> (
            <div onClick={()=>setactiveTab(item.tab)} className={`${activeTab===item.tab ? "border-t border-black": "opacity-40"}felx items-center cursor-pointer py-2 text-sm`}>
                <p className='ml-2 '>{item.icon}</p>
                <p className='flex space-x-10 '>{item.tab}</p>
            </div>)

           )}
            
        </div>
        <div>
          <div className='flex flex-wrap'>
            <ReqUserPostCard/>
          </div>
        </div>
        
        
    </div>
  )
}

export default ReqUserPostPart