import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Contribute from "./pages/Contribute.jsx";
import Login from "./pages/Login.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Signup, { action as signUpAction } from "./pages/Signup.jsx";
import { action as loginAction } from "./pages/Login.jsx";
import Errors from "./pages/Error.jsx";
import { pdfjs } from "react-pdf";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout, handleVerify } from "../src/utils/store/AuthSlice.js";
import RedirectingPage from "./pages/RedirectingPage.jsx";
import Profile from "./pages/Profile.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import DashBoardHeader from "./pages/DashBoardHeader.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import GenresPage from "./pages/GenresPage.jsx";
import BookCount from "./pages/BookCount.jsx";
import EditBook from "./pages/EditBook.jsx";
import PdfViewer from "./components/pdfViewer/PdfViewer.jsx";
import ChatHome from "./pages/ChatHome.jsx";
import ReadBook from "./pages/ReadBook.jsx";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const dispatch = useDispatch();
  const { isVerified, role } = useSelector((state) => state.auth);

  console.log("verified:", isVerified);

  const checkAuthenticated = useCallback(() => {
    try {
      const token = localStorage.getItem("token");
      const fetchData = async () => {
        const response = await fetch("http://localhost:8080/is-auth", {
          headers: {
            token: token ? token : "",
          },
        });
        if (!response.ok) {
          console.log('Logged out');
          dispatch(handleLogout());
        }
        const resData = await response.json();
        if (resData.status === true) {
          const id = resData.user_id;
          const role = resData.role;
          const full_name = resData.full_name;
          const dp_url = resData.dp_url;
          dispatch(handleVerify({ id, role, full_name, dp_url }));
        } else {
          dispatch(handleLogout());
        }
      };
      fetchData();
    } catch (e) {
      console.log("server error.....!!!", e);
      dispatch(handleLogout());
    }
  }, [dispatch, isVerified]);

  useEffect(() => {
    checkAuthenticated();
  }, []);

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
          element: isVerified ? <Contribute /> : <Navigate to={"/redirect"} />,
        },
        {
          path: "login",
          element: isVerified ? <Navigate to={"/"} /> : <Login />,
          action: loginAction,
        },
        {
          path: "genres",
          element: <GenresPage />,
        },
        {
          path: "signup",
          element: isVerified ? <Navigate to={"/"} /> : <Signup />,
          action: signUpAction,
        },
        {
          path: "user/:id",
          element: <Profile />,
        },
        {
          path: "books/:id",
          element: <BookDetails />,
        },
        {
          path: "books/:id/edit",
          element: <EditBook />,
        },
        {
          path: "books/:id/read",
          element: isVerified ? <ReadBook /> : <Navigate to={"/redirect"} />,
        },
        {
          path: "messages",
          element: isVerified ? <ChatHome /> : <Navigate to={"/redirect"} />,
        },
        {
          path: "redirect",
          element: <RedirectingPage />,
        },
        {
          path: "admin-panel",
          element: <DashBoardHeader />,
          children: [
            {
              path: "users",
              element: <UsersPage />,
            },
            {
              path: "total-books",
              element: <BookCount />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
