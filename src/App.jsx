import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import RootLayout from "./layout/Rootlayout";
import Loader from "./Pages/Loading";

// Lazy load pages
const Home = lazy(() => import("./Pages/Home"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<RootLayout />}
      >
        <Route
          index
          element={<Home />}
        />
      </Route>
    )
  );

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
