import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import azonHome from "../../pictures/azonHome.png";
import './SignupForm.css';
import Footer from "./AuthFooter";



function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Navigate to="/" replace={true}/>;
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, name, password }))
          .catch(async (res) => {
          let data;
          try {
            // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
          } catch {
            data = await res.text(); // Will hit this case if the server is down
          }
          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    const demoLogin = () => {
      dispatch(sessionActions.login({ email: 'demo@user.io', password: 'password' }))
    }
  
    return (
      <>
        <Link to={'/'}>
          <img className="azonHome" src={azonHome} />
        </Link>
      <div className="signup-container">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>

          {/* <ul> */}
            {errors.map(error => <li key={error} className="errors">{error}</li>)}
          {/* </ul> */}

          <label> Your name
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="First and last name" />
          </label>

          <label> Email
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label> Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="At least 6 characters" />
          </label>

          <label> Re-enter password
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </label>

          <button type="submit">Continue</button>

          <button type="submit" id="demo" onClick={demoLogin}>Demo Login</button>

          <p className='footerText'>By creating an account, you agree to Azon&apos;s Conditions of Use and Privacy Notice.</p>
          <p className='footerLogin'>Already have an account? <a href="/login">Sign in</a> </p>

        </form>
        <Footer />
       </div>
      </>
    );
  }
  
  export default SignupForm;
  