import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Contribute from "./pages/Contribute.jsx";
import Login from "./components/AuthForm/AuthForm.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Signup, { action } from "./pages/Signup.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
        },
        {
          path: "signup",
          element: <Signup />,
          action: action,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
