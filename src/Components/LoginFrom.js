import React, { useState, useEffect } from 'react'

function LoginForm() {

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)

    const changeHandler = ({ target: { name, value } }) => {
        validateUser(name, value)
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const validateUser = (name, value) => {
        if (name === 'email') {
            if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
                setInvalidEmail(true)
            } else {
                setInvalidEmail(false)
            }
        } else if (name === 'password') {
            if (value.length < 4) {
                setInvalidPassword(true)
            } else {
                setInvalidPassword(false)
            }
        }
    }

    return (
        <form>
            <label htmlFor="email">Email</label>
            <input className={invalidEmail ? 'invalid' : null} name="email" placeholder="​user@rapptrlabs.com​" type="text" maxLength="50" value={loginInfo.email} onChange={changeHandler} />
            <label htmlFor="password">Password</label>
            <input className={invalidPassword ? 'invalid' : null} name="password" placeholder="Must be between 4 and 16 characters" type="password" maxLength="16" value={loginInfo.password} onChange={changeHandler} />
        </form>
    )
}

export default LoginForm