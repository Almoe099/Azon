import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/session/LoginForm";
import SignupForm from "./components/session/SignupForm";
import Navigation from "./components/Navigation";
import Header from "./components/session/HomePage";
import * as sessionActions from "./store/session";

function Layout(){

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {isLoaded && <Outlet />}
    </>
  );

}

const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [

      {
        path: '/',
        // element: <h1 className="homepage"></h1>
        element: <Header />
      },
    
      {
        path: '/login',
        element: <LoginForm />
      },

      {
        path: 'signup',
        element: <SignupForm />
      }

    ]
  }


])

function App() {
  return <RouterProvider router={router} />
}

export default App;