import React, { useState, useEffect } from 'react'

function LoginForm({ loginHandler }) {

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidPassword, setInvalidPassword] = useState(false)
    const [login, setLogin] = useState(true)

    useEffect(() => {
        setLogin(!(!invalidEmail && !invalidPassword && !!loginInfo.email && !!loginInfo.password))
    }, [invalidEmail, invalidPassword])

    const changeHandler = ({ target: { name, value } }) => {
        validateUserInfo(name, value)
        setLoginInfo({ ...loginInfo, [name]: value })
    }

    const validateUserInfo = (name, value) => {
        if (name === 'email') {
            if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/)) {
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

    const submitHandler = (e) => {
        e.preventDefault()
        loginHandler(loginInfo)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="inner-form">
                <label htmlFor="email">Email</label>
                <input className={invalidEmail ? "invalid" : null}
                    name="email"
                    placeholder="​user@rapptrlabs.com​"
                    type="email"
                    maxLength="50"
                    value={loginInfo.email}
                    onChange={changeHandler} />
                <div className={`error-message ${invalidEmail ? "invalid" : null}`} id="email-error">Not a valid email</div>
            </div>
            <div className="inner-form">
                <label htmlFor="password">Password</label>
                <input className={invalidPassword ? 'invalid' : null}
                    name="password"
                    placeholder="Must be between 4 and 16 characters"
                    type="password"
                    maxLength="16"
                    value={loginInfo.password}
                    onChange={changeHandler} />
                <div className={`error-message ${invalidPassword ? "invalid" : null}`} id="email-error">Not a valid password</div>
            </div>
            <div className="inner-form">
                <input type="submit" value="Login" disabled={login} id={!login ? 'login' : null} />
            </div>
        </form>
    )
}

export default LoginForm