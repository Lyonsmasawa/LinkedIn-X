import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post(props) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar />
            <div className="post__info">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{props.message}</p>
        </div>
    </div>
  )
}

export default Post