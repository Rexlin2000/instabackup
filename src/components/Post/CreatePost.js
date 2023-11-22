import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import './CreateModelPost.css'



const CreatePost = ({
    onClose,isOpen
}) => {

    const [isDragOver, setIsDragOver] = useState(false)
    const [file, setFile] = useState()

    const handleDrop = (event)=>{
            event.preventDefault()
            const droppedFile=event.dataTransfer.file[0]
            if(droppedFile.type.StartsWith("image/") || droppedFile.type.StartsWith("video/") ){
                setFile(droppedFile)
            }
    }

    

const handleDragOver =(event)=>{
    event.preventDefault()
    event.dataTransfer.dropEffect="copy"
    setIsDragOver(true)
}
const handleDragLeave = ()=>{
    setIsDragOver(false)
}

const handleonChange =(e)=>{
    const file=e.target.file[0]
    if(file && file.type.startsWith("image/") || file.type.startsWith("video/")){
        setFile(file)

    }else{
        setFile(null)
        alert("please select an image or video")
    }
}

  return (
    <div>
        <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className='flex justify-between py-1 px-10 items-center'>
            <div className='flex justify-center items-center'>
            <p className=''>New Create Post</p>
            </div>
            <Button className="inline-flex" variant={"ghost"} size="sm" colorScheme='blue'>
                Share
            </Button>
          </div>
          <hr />
         
          <ModalBody>
            <div className='grid justify-items-center'>
                <div className='w-[50%] h-96 '>
                    <div onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className="drag-drop h-full"
                    >
                        
                        <div className='justify-items-center   flex justify-center'>
                            <FaPhotoVideo className='flex h-16 w-16 content-center '/>
                            
                        </div>
                        <p>Drag Photos or videos here</p>
                        <label htmlFor="file-upload" className='custom-file-upload items-center '>Select From Computer</label>

                        <input className ="fileInput " type="file" id="file-upload" accept='image/*, video/*' onChange={handleonChange} />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>

          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePost