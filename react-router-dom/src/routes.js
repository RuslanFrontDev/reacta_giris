// import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import PrivateProfile from "./components/PrivateProfile";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import HomeLayout from "./pages/HomeLayout";

const routes = [
  {
    path: "/",
    name:'home',
    element: <HomeLayout />,
    children: [
      {
        name:'index',
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        name:'contact',
        element: <Contact />,
      },
      {
        path: "/profile",
        auth:true,
        name:'profile',
        element: (
         //  <PrivateProfile>
            <Profile />
         //  </PrivateProfile>
        ),
      },
      {
        path: "/blog",
        element: <BlogLayout />,
        auth:true,
        name:'blog',
        children: [
          {
            index: true,
            name:'index',
            element: <Blog />,
          },
          {
            path: "categories",
            name:'categories',
            element: <Categories />,
          },
          {
            path: "post/:id",
            name:'post',
            element: <Post />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    name:'auth',
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        name:'login',
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    name:'notFound',
    element: <Page404 />,
  },
];
const authMap = routes =>routes.map(route=>{
   if(route?.auth){
      route.element=<PrivateProfile>{route.element}</PrivateProfile>
   }
   if(route?.children){
      route.children=authMap(route.children)
   }
   return route
})
export default authMap(routes);
