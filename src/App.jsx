import HomePage from "./pages/home/HomePage";
import BlogForm from "./pages/blogForm/BlogForm";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <h1>No page found!</h1>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogForm />,
  },
]);

function App() {
  return (
    <div style={{ padding: "5px" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
