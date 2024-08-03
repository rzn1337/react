import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()

  return (
    <div className="bg-pink-500 text-white text-center text-2xl">User: {userid}</div>
  )
}

export default User