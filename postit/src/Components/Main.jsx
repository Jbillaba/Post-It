import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostIt from './PostIt'
import Board from './Board'

export default function Main ()  {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Board/>}/>
        <Route exact path='/postit' element={<PostIt/>} />
      </Routes>
    </div>
  )
}

