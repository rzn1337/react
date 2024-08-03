import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rzn1337').then(res => res.json()).then(res => setData(res))
    // }, [])
  return (
    <div className="bg-pink-500 text-white text-center text-2xl">Github Followers: {data.followers}
        <img src={data.avatar_url} alt="pic" width={500} />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rzn1337')
    return response.json()
}