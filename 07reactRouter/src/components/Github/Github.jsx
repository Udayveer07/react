import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Udayveer07')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); 
    //             setData(data)
    //     })
    // },[])

    return (
        <div className='text-center text-white bg-black m-4 p-4 text-3xl'>Github ID: {data.id}
            <img src={data.avatar_url} alt='GitHub picture' width={300}></img>
        </div>
    )
}

export default Github

export const GithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Udayveer07')
    return response.json()
}


