import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Contribute from "./pages/Contribute.jsx";
import Login from "./components/AuthForm/AuthForm.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Signup, { action as signUpAction } from "./pages/Signup.jsx";
import { action as loginAction } from "./pages/Login.jsx";
import Errors from "./pages/Error.jsx";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout, handleVerify } from "../src/utils/store/AuthSlice.js";
import RedirectingPage from "./pages/RedirectingPage.jsx";
import Profile from "./pages/Profile.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import AdminPage from "./pages/AdminPage.jsx";

function App() {
  const dispatch = useDispatch();
  // const check = useSelector((state) => state.auth);
  const checkAuthenticated = useCallback( () => {
    try {
      const token = localStorage.getItem("token");
      const fetchData = async () => {
        const response = await fetch("http://localhost:8080/is-auth", {
          headers: {
            token: token ? token : "",
          },
        });
        if (!response.ok) {
          console.log("some error occured");
          dispatch(handleLogout());
        }
        const resData = await response.json();
        if (resData.status === true) {
          const id = resData.user_id;
          dispatch(handleVerify({id}));
        } else {
          dispatch(handleLogout());
        }
      };
      fetchData()
    } catch (e) {
      console.log("server error.....!!!", e);
      dispatch(handleLogout())
    }
  }, [dispatch]);

  useEffect(() => {
    checkAuthenticated()
  }, []);


  // console.log(check);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errors />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "books",
          element: <Books />,
        },
        {
          path: "contribute",
          element: <Contribute />,
        },
        {
          path: "login",
          element: <Login />,
          action: loginAction,
        },
        {
          path: "signup",
          element: <Signup />,
          action: signUpAction,
        },
        {
          path: "user/:id",
          element: <Profile/>,
        },
        {
          path: "books/:id",
          element: <BookDetails/>
        },
        {
          path: 'redirect',
          element: <RedirectingPage/>
        },
        {
          path: 'admin-panel',
          element: <AdminPage/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
