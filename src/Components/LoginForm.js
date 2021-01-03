import React, { useState, useEffect } from 'react'

function LoginForm({ loginHandler, error }) {

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
        setTimeout(() => {
            setLogin(true)
        }, 400);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="inner-form">
                <label htmlFor="email">Email</label>
                <input className={invalidEmail ? "invalid" : null}
                    id="email"
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
                    id="password"
                    name="password"
                    placeholder="Must be between 4 and 16 characters"
                    type="password"
                    maxLength="16"
                    value={loginInfo.password}
                    onChange={changeHandler} />
                <div className={`error-message ${invalidPassword ? "invalid" : null}`} id="password-error">Not a valid password</div>
            </div>
            <div className="inner-form">
                <input type="submit" value="Login" disabled={login} id={login ? null : 'login'} />
                <div className={`error-message ${error ? "invalid" : null}`} id="login-error">The server could not be reached. Please try again later.</div>
            </div>
        </form>

        //<div><img/><input/></div>
    )
}

export default LoginForm