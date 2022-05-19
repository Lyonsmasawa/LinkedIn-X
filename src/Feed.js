import './Feed.css'
import { CalendarViewDay, Create, Image, Subscriptions, EventNote } from '@material-ui/icons'
import InputOption from './InputOption'
import Post from './Post'
import { useEffect, useState } from 'react'
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault(); 

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
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
           
            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
               ))}
            </FlipMove>
        </div>
    )
}

export default Feed