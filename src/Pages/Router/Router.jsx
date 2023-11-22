import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Homepage from '../Homepage/Homepage'
import {Routes, Route, useLocation } from 'react-router-dom'
import Profile from '../Profile/Profile'
import Explore from '../../components/Explore/Explore'
import Reelsvideo from '../../components/Reels/Reelsvideo'
import Messaging from '../../components/Messages/Messaging'
import Auth from '../Auth/Auth'

const Router = () => {
    const location = useLocation();
  return (
    <div>
    { (location.pathname!=="/signin" && location.pathname!=="/signup") && (
        <div className='flex'>
            <div className='w-[20%] border border-1-slate-500 pl-10'>
                <Sidebar/>
            </div>
            <div className='w-full'>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/username" element={<Profile />}></Route>
                    <Route path="/explore" element={<Explore/>}></Route>
                    <Route path='/reelsvideo' element={<Reelsvideo/>}></Route>
                    <Route path='/message' element={<Messaging/>}></Route>
                    
                </Routes>
            </div>
        </div>
        )}
        
        {(location.pathname==="/signin" || location.pathname==="/signup")&&(
        <div>
            <Routes>
            <Route path="/signup" element={<Auth/>}></Route>
            <Route path="/signin" element={<Auth/>}></Route>
            </Routes>
        </div>)
        }
    </div>
  )
}

export default Router