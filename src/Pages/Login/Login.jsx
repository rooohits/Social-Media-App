import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <Link to="/" className="loginLeftLinkTag"><h3 className="loginLogo">SocialChat</h3></Link>
            <span className="loginDesc">
              Connect with friends and the world around you on SocialChat
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input className="loginInput" placeholder="Email" />
              <input className="loginInput" placeholder="Password" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password ?</span>
              <Link to="/register"> <button className="loginRegisterButton">
                Create a New Account
              </button> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
