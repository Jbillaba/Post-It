import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_POSTS_URL } from '../Context/Globals'
const Posts = () => {
  
  const [notes, setNotes] = useState()

  useEffect (() => {
    const getNotes = async () => {
      const response = await axios.get(`${SERVER_POSTS_URL}`)
      setNotes(response.data)
    }
    getNotes()
  }, [])

  if(!notes) {
    return (
      <h1> no notes to display</h1>
    )
  }
  return (
    <div className='note-grid'>
      {
        notes.map((note) => (
          <div className='note' key={note.id}>
            <h2>{note.message}</h2>
            <p>{note.creator}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Posts
