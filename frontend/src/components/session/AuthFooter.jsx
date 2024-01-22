import linkedin from "../../pictures/linkedin.png";
import github from "../../pictures/github.png";
import { Link } from "react-router-dom";
import './AuthFooter.css';

const AuthFooter = () => {
  return (
    <footer className='authFooter'>
      <div className="icons">
        <Link to={'https://github.com/Almoe099'}>
         <img className="githubIcon" src={github} alt="" />
         <img className="linkedinIcon" src={linkedin} alt="" />
        </Link>
      </div>
      <p>© 2024 Azon. All rights reserved.</p>
    </footer>
  );
};

export default AuthFooter