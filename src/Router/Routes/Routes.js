import Main from "../../Layouts/Main";
import CheckOut from "../../Pagese/CheckOut/CheckOut";
import Home from "../../Pagese/Home/Home";
import Login from "../../Pagese/Login/Login";
import SignUp from "../../Pagese/Login/SignUp";
import Orders from "../../Pagese/Orders/Orders";
import PriveteRoute from "../../PriveteRoute/PriveteRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([{
    path: '/',
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signUp",
            element:<SignUp></SignUp>
        },
        {
            path:"/checkOut/:id",
            element:<CheckOut></CheckOut>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:"/orders",
            element:<PriveteRoute><Orders></Orders></PriveteRoute>
        }
       

    ]
}])


export default router;