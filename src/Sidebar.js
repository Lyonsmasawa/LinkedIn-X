import { Avatar } from '@material-ui/core'
import './Sidebar.css'

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
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