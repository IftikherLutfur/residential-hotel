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
        },
        {
      path:'/contact',
      element:<PrivateRoutes><Contact></Contact></PrivateRoutes>
        },
        {
          path:'/category/:id',
          element:<PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
          loader: ()=> fetch('category.json')
          // loader: async ({params}) => fetch(`/category/${params.id}`)
        }
      ]
    },
  ]);

  export default router;