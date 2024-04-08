import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import AboutUs from "../Components/AboutUs/AboutUs";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/about',
          element:<AboutUs></AboutUs>
        }
      ]
    },
  ]);

  export default router;