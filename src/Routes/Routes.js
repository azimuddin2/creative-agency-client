import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ServiceList from "../Pages/Dashboard/UserPages/ServiceList/ServiceList";
import MyOrders from "../Pages/Dashboard/UserPages/MyOrders/MyOrders";
import AddReview from "../Pages/Dashboard/UserPages/AddReview/AddReview";
import AllUser from "../Pages/Dashboard/AdminPages/AllUser/AllUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'all-user',
                element: <AllUser></AllUser>
            },

            // user related route
            {
                path: '/dashboard',
                element: <ServiceList></ServiceList>
            },
            {
                path: 'my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: 'add-review',
                element: <AddReview></AddReview>
            }
        ],
    },
])

export default router;