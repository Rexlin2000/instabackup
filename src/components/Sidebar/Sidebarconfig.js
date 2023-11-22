import { AiFillCompass, AiFillHeart, AiFillMessage, AiFillPlusCircle, AiOutlineMessage, AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineHome, AiFillHome,AiOutlineSearch, AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { RiVideoLine, RiVideoFill} from 'react-icons/ri'
import { CgProfile } from "react-icons/cg";


export const mainside=[
    {title:"Home",icon: <AiOutlineHome className='text-2xl mr-4'></AiOutlineHome>, activeIcon: <AiFillHome className='text-2xl mr-4'></AiFillHome> },
    {title:"Search", icon:<AiOutlineSearch className='text-2xl mr-4'></AiOutlineSearch>, activeIcon:<AiOutlineSearch className='text-2xl mr-4' ></AiOutlineSearch> },
    {title:"Explore", icon:<AiOutlineCompass className='text-2xl mr-4'></AiOutlineCompass>, activeIcon:<AiFillCompass className='text-2xl mr-4'></AiFillCompass>},
    {title:"Reels", icon:<RiVideoLine className='text-2xl mr-4'></RiVideoLine>, activeIcon:<RiVideoFill className='text-2xl mr-4'></RiVideoFill>},
    {title:"Message", icon:<AiOutlineMessage className='text-2xl mr-4'></AiOutlineMessage>, activeIcon:<AiFillMessage className='text-2xl mr-4'></AiFillMessage>},
    {title:"Notification", icon:<AiOutlineHeart className='text-2xl mr-4'></AiOutlineHeart>, activeIcon:<AiFillHeart className='text-2xl mr-4'></AiFillHeart>},
    {title:"Create", icon:<AiOutlinePlusCircle className='text-2xl mr-4'></AiOutlinePlusCircle>, activeIcon:<AiFillPlusCircle className='text-2xl mr-4'></AiFillPlusCircle>},
    {title:"Profile", icon:<CgProfile className='text-2xl mr-4'></CgProfile>, activeIcon:<CgProfile className='text-2xl mr-4'></CgProfile>}


]