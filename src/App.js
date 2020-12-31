import Login from './Containers/Login'
import ToDo from './Containers/ToDo'
function App() {

  const loginHandler = (userInfo) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(userInfo)
    }

    fetch('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', options)
      .then(resp => resp.json())
      .then(console.log)
  }

  const userData = {
    "user_id": 16,
    "user_email": "test@rapptrlabs.com",
    "user_username": "testuser",
    "user_is_active": 1,
    "user_profile_image": "http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png", "user_last_active_epoch": 1544680026,
    "user_creation_epoch": 1544713200,
    "user_is_new": 1,
    "user_token": "6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e"
  }

  return (
    <div className="App">
      <Login loginHandler={loginHandler} />
      <ToDo userDate={userData} />
    </div>
  );
}

export default App;
