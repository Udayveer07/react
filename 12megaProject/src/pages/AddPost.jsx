import React from 'react'
import {Container, PostForm as PostFormComponent} from '../components'  

function AddPost() {
    return (
        <div className='py-8'>
            <Container>
                <PostFormComponent />
            </Container>
        </div>
    )
}

export default AddPost
