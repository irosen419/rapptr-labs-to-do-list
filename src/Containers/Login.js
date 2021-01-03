import LoginForm from '../Components/LoginForm'
import '../SCSS/login.scss'

function Login({ loginHandler, error }) {
    return (
        <div id="login">
            <h1>Rapptr Labs</h1>
            <LoginForm loginHandler={loginHandler} error={error} />
        </div>
    )
}

export default Login