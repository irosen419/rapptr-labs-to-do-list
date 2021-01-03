import './App.scss'
import React, { useState } from 'react'
import Login from './Containers/Login'
import ToDo from './Containers/ToDo'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const loginHandler = (userInfo) => {
    let formData = new FormData()
    formData.append('email', userInfo.email)
    formData.append('password', userInfo.password)

    axios({
      method: 'post',
      url: 'http://dev.rapptrlabs.com/Tests/scripts/user-login.php',
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: formData,
    }).then((resp) => {
      if (resp.data) {
        setUserData(resp.data)
        logUserIn()
      }
    }).catch(err => {
      console.log(err)
      setLoginError(true)
    })
  }

  const logUserIn = () => {
    setTimeout(() => {
      setLoggedIn(true)
      if (loginError) setLoginError(false)
    }, 450)
  }

  const logout = () => {
    setLoggedIn(false)
  }


  return (
    <div className="App">
      {loggedIn ? <ToDo userData={userData} logout={logout} /> : <Login loginHandler={loginHandler} error={loginError} />}
    </div >
  );
}

export default App;
