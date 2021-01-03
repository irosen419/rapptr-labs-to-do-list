import LoginForm from '../Components/LoginForm'
import '../SCSS/login.scss'

function Login({ loginHandler }) {
    return (
        <div id="login">
            <h1>Rapptr Labs</h1>
            <LoginForm loginHandler={loginHandler} />
        </div>
    )
}

export default Login