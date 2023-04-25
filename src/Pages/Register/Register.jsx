import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <Link to="/" className="loginLeftLinkTag">
              <h3 className="loginLogo">SocialChat</h3>
            </Link>
            <span className="loginDesc">
              Connect with friends and the world around you on SocialChat
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input className="loginInput" placeholder="Username" />
              <input className="loginInput" placeholder="Email" />
              <input className="loginInput" placeholder="Password" />
              <input className="loginInput" placeholder="Confirm Password" />
              <button className="loginButton">Sign Up</button>
              <Link to="/login">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
