import React from 'react'
import './Auth.css'
import Signin from '../../components/Register/Signin'


const Auth = () => {
  return (
    <div>
        
        <div className='flex items-center justify-center h-[100vh]'>
            <div className='relative hidden lg:block border'>
                <div className='h-[35.3rem] w-[23rem]'>
                    {/* <img classname="h-full w-full" src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png" alt="" /> */}
                    <div className='mobilewallpaper'>

                    </div>
                </div>
            </div>
        </div>
        <div>
          <Signin/>
        </div>
    </div>
  )
}

export default Auth