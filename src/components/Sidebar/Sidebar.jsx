import React, { useState } from 'react'
import instagramlogo from '../../assest/instagramlogo.png'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {mainside} from './Sidebarconfig'
import {useNavigate} from 'react-router-dom'
import { TbBrandThreads } from "react-icons/tb";
import CreatePost from '../Post/CreatePost'
import { useDisclosure } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import SearchComponents from '../SearchComponents/SearchComponents'
import Messagepost from '../Messages/Messagepost'



const Sidebar = () => {
    const [activeTab, setActiveTab] = useState();
    const navigate = useNavigate();

    const{isOpen, onClose, onOpen} = useDisclosure()

    const [isSearchVisible, setIsSearchVisible] = useState(false)
    const [isMessageVisible, setIsMessageVisible] = useState(false)

    const handleTabClick = (title)=>{
        
        setActiveTab(title)
        if(title==="Profile"){
        navigate("/username")
        }
        else if(title==="Home"){
            navigate("/")
        }else if(title==="Explore"){
            navigate("/explore")
        }else if(title==="Reels"){
            navigate("/reelsvideo")
        }else if(title==="Create"){
            onOpen()
        }
        if(title==="Search"){
            setIsSearchVisible(true)
        }else setIsSearchVisible(false)

        if(title==="Message"){
            setIsMessageVisible(true)
            navigate("/message")
        }else setIsMessageVisible(false)



    }

    //
  return (
    <div className='sticky top-0 h-[100vh] flex'>
        <div className={`flex flex-col justify-between h-full ${activeTab==="Search"?"px-2":"px-10"} ${activeTab==="Message"?"px-2":"px-10"}`}>
            {<div>
            {activeTab!=="Search" && activeTab!=="Message" &&<div className='pt-10'>
                <img src={instagramlogo}  className='w-40' alt="" />
            </div>}
            <div className='mt-10'>
                {mainside.map((item)=> (
                
                <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab===item.title? item.activeIcon:item.icon}
                    {activeTab!=="Search" && activeTab!=="Message" &&<p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>}
                    

                </div>))}
                
            
            </div>
            </div>}
            <div>
            <div className='flex items-center cursor-pointer pb-5'>
                
                <TbBrandThreads className="text-2xl "/>
                {activeTab!=="Search" && activeTab!=="Message" &&<p className='ml-5'> <Link className='no-underline' href='https://www.threads.net/' isExternal>
                Threads 
                    </Link> </p>}

            </div>

            <div className='flex items-center cursor-pointer pb-10'>
                
                <IoReorderThreeOutline className="text-2xl"/>
                {activeTab!=="Search" && activeTab!=="Message" &&<p className='ml-5'>More</p>}

            </div>
            </div>
        </div>
        <CreatePost onClose={onClose} isOpen={isOpen}/>
        {isSearchVisible &&  <SearchComponents/>}
        {isMessageVisible && <Messagepost/>}

    </div>
  )
}

export default Sidebar