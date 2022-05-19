import { Avatar } from '@material-ui/core'
import './Sidebar.css'

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixid=MnwxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY1MjcxNzk0Ng&ixlib=rb-1.2.1&q=85&w=1920" alt="" />
                <Avatar />
                <h2>Lyons Masawa</h2>
                <h4>lyonsmasawa@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">1010</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">1010</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar