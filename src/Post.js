import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined  } from '@material-ui/icons'

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

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like"/>
            <InputOption Icon={ChatOutlined} title="Comment"/>
            <InputOption Icon={ShareOutlined} title="Share"/>
            <InputOption Icon={SendOutlined} title="Send"/>
        </div>
    </div>
  )
}

export default Post