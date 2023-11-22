import React, {useRef, useState, useEffect} from 'react'
import './Videoss.css'
import vid1 from './Videos/vid-2.mp4'



const Videoss = () => {
const [isVideo, setisVideo] = useState(false)

const vidRef = useRef()
const onVideoClick = () =>{
    if(isVideo){
        vidRef.current.pause();
        setisVideo(false)
    }else {
        vidRef.current.play();
        setisVideo(true)
    }
}

useEffect(()=>{
    onVideoClick()
}, [])

  return (
    <div className='video-cards'>
        <video onClick={onVideoClick} className='video-player' ref={vidRef} src={vid1} loop />
        

    </div>
  )
}

export default Videoss