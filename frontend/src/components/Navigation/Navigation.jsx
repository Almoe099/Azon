import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from './ProfileButton';
import './Navigation.css';
import Header from "../session/HomePage";

function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
  
    const sessionLinks = sessionUser ? (
      <li>
        {/* <ProfileButton user={sessionUser} /> */}
      </li>
    ) : (
      <>
        <li>  
          {/* <NavLink to="/login">Log In</NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/signup">Sign Up</NavLink> */}
        </li>
      </>
    );
  
    return (
      <div>
        <li>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/" className="nav-link">
          </NavLink>
        </li>
        {sessionLinks}
      </div>
    );
}

export default Navigation;