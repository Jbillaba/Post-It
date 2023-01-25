import React from 'react'
import { useNavigate } from 'react-router-dom'
import Posts from './Posts'

const Board = () => {
  let navigate = useNavigate()

  const RouteToPost = () => {
    navigate('/postit')
  }
  return (
    <div className='Board'>
      <Posts/>
      <button onClick={RouteToPost}> Post It </button>
    </div>
  )
}

export default Board
