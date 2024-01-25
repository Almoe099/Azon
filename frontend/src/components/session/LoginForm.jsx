import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import azonHome from "../../pictures/azonHome.png";
import AuthFooter from "./AuthFooter";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if, e.g., server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };

  const demoLogin = () => {
    dispatch(
      sessionActions.login({ email: "demo@user.io", password: "password" })
    );
  };

  return (
    <div className="login">
      <Link to={"/"}>
        <img className="azonHome" src={azonHome} />
      </Link>

      <div className="login-container">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          {errors.map((error) => (
            <li key={error} className="errors">
              {error}
            </li>
          ))}

          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit">Continue</button>

          <button type="submit" id="demo" onClick={demoLogin}>
            Demo Login
          </button>

          <p className="footerText">
            By continuing, you agree to Azon&apos;s Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
      <div className="line">
        <p className="newAccount">New to Azon?</p>
        <Link to={"/signup"}>
          <button className="createButton" type="submit">
            Create your Azon account
          </button>
        </Link>
      </div>
      <AuthFooter />
    </div>
  );
};

export default LoginForm;
