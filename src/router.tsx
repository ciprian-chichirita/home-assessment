import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExceptionPage from "./components/ExceptionPage/ExceptionPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ExceptionPage />,
  },
  {
    path: "*",
    errorElement: <ExceptionPage />,
    element: <ExceptionPage message="Oops! we couldn't find that page" />,
  },
]);

export default router;
