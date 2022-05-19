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
        </div>
    )
}

export default Sidebar