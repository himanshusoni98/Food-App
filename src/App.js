import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
// import Body from "./components/Body";
import Carts from "./components/Carts";
import Header from "./components/Header";
import RestaurentMenu from "./components/RestaurentMenu";
import appStore from "./utilis/appStore";

const Body = lazy(()=>import("./components/Body"));


const AppLayout = () => {

    return (
        <Provider store={appStore}>
        <div className="App">
            <Header />
            <Outlet/>
        </div>
    </Provider>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children :[
            {
                path:"/body",
                element:(<Suspense fallback={<h1>loading......</h1>}><Body/></Suspense>)
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path: "/cart",
                element : <Carts/>
            },
            {
                path: "/restaurent/:resId",
                element : <RestaurentMenu/>
            }
        ],
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
