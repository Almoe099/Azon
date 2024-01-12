import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
  
    const sessionLinks = sessionUser ? (
      <li>
        <ProfileButton user={sessionUser} />
      </li>
    ) : (
      <>
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  
    return (
      <ul>
        <li>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="/" className="nav-link">
        <img
          src="https://i.redd.it/t7y4e5ya0gf71.jpg"
          className="homepage"
          alt="Home"
          style={{ width: '200px', height: '75px', borderRadius: '10%' }} // Adjust the size as needed
        />
      </NavLink>
        </li>
        {sessionLinks}
      </ul>
    );
}

export default Navigation;