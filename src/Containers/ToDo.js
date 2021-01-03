import '../SCSS/to-do.scss'
import Main from './MainList'
import NavBar from '../Components/NavBar'

function ToDo({ userData, logout }) {
    return (
        <div id="to-do">
            <NavBar userData={userData} logout={logout} />
            <h1>My To-Do List</h1>
            <Main />
        </div>
    )
}

export default ToDo