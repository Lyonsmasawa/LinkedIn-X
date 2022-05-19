import './Feed.css'
import { CalendarViewDay, Create, Image, Subscriptions, EventNote } from '@material-ui/icons'
import InputOption from './InputOption'
import Post from './Post'
import { useState } from 'react'

function Feed() {
    const [posts, setPosts] = useState([])

    const sendPost = (e) => {
        e.preventDefault(); 
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form action="">
                        <input type="text" />
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7fc15e"/>
                </div>
            </div>
            <div className="feed__post">
               {posts.map((post) => (
                    <Post name="Lyons Masawa" description="this is it" message="Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem"/>
               ))}
            </div>



        </div>
    )
}

export default Feed