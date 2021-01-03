function NavBar({ userData, logout }) {
    return (
        <div id="navbar">
            <div id="navbar-left">
                <h2>Welcome {userData.user_username}!</h2>
                <img src={userData.user_profile_image} alt={userData.user_username} />
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default NavBar