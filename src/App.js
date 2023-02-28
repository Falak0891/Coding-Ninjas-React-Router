import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./pages/app/details/Details";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "", element: <Hero /> },
        { path: "/courses", element: <Courses /> },
        { path: "/courses/:courseId", element: <Details /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
