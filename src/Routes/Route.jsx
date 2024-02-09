import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SingleUser from "../Pages/Users/SingleUser";
import User from "../Pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <User />,
      },
      {
        path: "/user/:id",
        element: <SingleUser />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;
