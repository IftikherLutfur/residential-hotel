import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import AboutUs from "../Components/AboutUs/AboutUs";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Components/Contact/Contact";
import CardDetails from "../Components/CardDetails/CardDetails";
import Error from "./Error";
import Services from "../Components/Services/Services";
import UpdateProfile from "../Components/UserProfile/UpdateProfile";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
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
        },
        {
      path:'/contact',
      element:<PrivateRoutes><Contact></Contact></PrivateRoutes>
        },
        {
          path:'/category/:id',
          element:<PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
          loader: ()=> fetch('/category.json')
          // loader: async ({params}) => fetch(`/category.json/${params.id}`)
        },
        
        {
          path:'/services',
          element:<PrivateRoutes><Services></Services></PrivateRoutes>
      },
         { path:'/update',
          element:<PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
      }
      ]
    },
  ]);

  export default router;