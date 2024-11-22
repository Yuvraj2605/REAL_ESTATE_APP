import Home from "./Route/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./Route/List/List";
import { Layout, ProtectRoute } from "./Componants/layout/Layout";
import SinglePage from "./Route/SinglePage/SinglePage";
import ProfilePage from "./Route/profilePage/ProfilePage";
import Register from "./Route/Register/Register";
import Login from "./Route/Login/Login";
import UpdateProfile from "./Route/UpdateProfile/UpdateProfile";
import NewPost from "./Route/newPostPage/NewPost";
import { listloader, singlePageLoader } from "./Lib/Loader";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/List",
          element: <List />,
          loader:listloader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader:singlePageLoader,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path:"/",
      element:<ProtectRoute/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <UpdateProfile/>
        },
        {
          path:"/addPost",
          element:<NewPost/>
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default App;
