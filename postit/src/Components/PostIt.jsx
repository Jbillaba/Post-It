import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_POSTS_URL } from '../Context/Globals'

const PostIt = () => {
  let navigate = useNavigate()

  const headers = {
    'Content-Type': 'multipart/form-data'
  }

  const RouteToMainPage = () => {
    navigate('/')
  }

  const HandleSubmit =  async (e) => {
    e.preventDefault()
    let response = await fetch(`${SERVER_POSTS_URL}` , {
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify({
        'message':e.target.message.value,
        'creator':e.target.creator.value,
      })
    })
      if(response.status === 201){
        alert("Posted It!!")
        navigate('/')
      } else if(response.status >= 400){
        alert("something went wrong try again")
      }
  }

  return (
    <div>
      <h2> this is the posting page</h2>
      <form onSubmit={HandleSubmit}>
        <input type='text' name='creator' placeholder='Enter Your Name' />
        <br/>
        <input type='text' name='message' placeholder='Enter The Message' />
        <br/>
        <input type='submit' />
      </form>
      <br/>
      <button onClick={RouteToMainPage}> Back To Main Page </button>
    </div>
  )
}

export default PostIt
