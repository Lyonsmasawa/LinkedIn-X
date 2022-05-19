import './Feed.css'
import { CalendarViewDay, Create, Image, Subscriptions, EventNote } from '@material-ui/icons'
import InputOption from './InputOption'
import Post from './Post'
import { useEffect, useState } from 'react'
import { db } from './firebase'
import firebase from 'firebase/compat/app'

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('fff')

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])

    const sendPost = (e) => {
        e.preventDefault(); 

        db.collection('posts').add({
            name: 'Lyons Masawa',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
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
            <div className="feed__post">
               {posts.map((post) => (
                    <Post name="Lyons Masawa" description="this is it" message="Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem Lorem ipsum Lorem Ipsum Lorem Ipsum Lorem"/>
               ))}
            </div>



        </div>
    )
}

export default Feed