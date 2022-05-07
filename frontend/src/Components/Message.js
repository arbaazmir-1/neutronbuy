import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Message = (props) => {
  const {text} = props
  const toastMessage = (error)=>{
    toast.error(`${error}`);
  }
  return (
    <>
            {toastMessage(text)}
            <ToastContainer />
          </>
  )
}

export default Message