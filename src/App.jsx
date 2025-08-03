import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { lazy } from "react";
import RootLayout from "./layout/Rootlayout";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/Portfolio'
        element={<RootLayout />}
      >
        <Route
          index
          element={<Home />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
