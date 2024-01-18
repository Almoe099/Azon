import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "./components/session/LoginForm";
import SignupForm from "./components/session/SignupForm";
import Navigation from "./components/Navigation";
import HomePage from "./components/session/HomePage";
import * as sessionActions from "./store/session";
import ProductsIndex from "./components/product/ProductIndex";
import { useLocation } from "react-router-dom";
function Layout(){

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)

  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const renderNavigation = !isLoginPage && !isSignupPage;

  useEffect(() => {
    dispatch(sessionActions.restoreSession()).then(() => {
      setIsLoaded(true)
    });
  }, [dispatch]);
  

  return (
    <>
      {renderNavigation && <Navigation />}
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
        element: <HomePage />
      },
    
      {
        path: '/login',
        element: <LoginForm />
      },

      {
        path: 'signup',
        element: <SignupForm />
      },

      {
        path: 'products',
        element: <ProductsIndex />
      }

    ]
  }


])

function App() {
  return <RouterProvider router={router} />
}

export default App;