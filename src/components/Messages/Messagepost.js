import React from 'react'
import SearchUserCard from '../SearchComponents/SearchUserCard'
import './Messagepost.css'
import Messagecard from './Messagecard'

const Messagepost = () => {
  return (
    <div className='SearchContainer '>
        <div className='px-3 pb-5 '>
            <h1 className='text-xl pb-5 '>Messages</h1>
            {/* <input className='searchInput' type="text"  placeholder='Search..'/> */}
        </div>
        <hr />
        <div className='px-3 pt-7 '>
            {[1,1,1].map((item)=><Messagecard/>)}
        </div>
        
    </div>
  )
}

export default Messagepost