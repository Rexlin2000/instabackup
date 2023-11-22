import React from 'react'
import ProfilUserDetails from '../../components/profilecomponent/ProfilUserDetails'
import ReqUserPostPart from '../../components/profilecomponent/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
        <div>
            <ProfilUserDetails/>
        </div>
        <div>
            <ReqUserPostPart/>
        </div>

    </div>
  )
}

export default Profile