import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import linkedin from "../../pictures/linkedin.png";
import github from "../../pictures/github.png";
import './Footer.css'


const Footer = () => {
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        navigate('/')
    };

    const handleSubmit = (e) => {
        if (user) {
          // If there is a user, perform logout
          logout(e);
        } else {
          // If there is no user, navigate to the login page
          navigate('/login');
        }
    };

    return (
        <>
              {!user && (
            <div className="bottomAuth">
                <Link to={user ? '/' : '/login'}>
                  <button type="submit" className="auth-signin-button" onClick={handleSubmit}>
                  {!user ? "Sign in" : "Sign out"}
                  </button>
                </Link>
                <label className="new-customer-label">
                  {!user ? "New customer?" : ""}<Link to={"/signup"}>{!user ? "Start here." : ""}</Link>
                </label>
            </div>
            )}
        <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
        </div>
        <footer className="footer-container">
      <div className="footer-section">
        <h4>Get to Know Us</h4>
      </div>

      <div className="footer-section">
      <Link to={'https://github.com/Almoe099'}>
            <img className="linkedinIcon" src={linkedin} alt="" />
        </Link>
      </div>


      <div className="footer-section">
      <Link to={'https://github.com/Almoe099'}>
            <img className="linkedinIcon" src={github} alt="" />
        </Link>
      </div>
    </footer>
    </>
  );
    
}

export default Footer