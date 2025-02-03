import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
    return (
        <div className='text-center bg-black text-white text-3xl p-4 '>User: {id}</div>
    )
}

export default User
