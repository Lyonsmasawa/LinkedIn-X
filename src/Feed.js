import './Feed.css'
import { Create } from '@material-ui/icons'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create />
                    <form action="">
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    
                </div>
            </div>
        </div>
    )
}

export default Feed