import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import SingleProductPage from "./pages/SingleProductPage";
import { CheckOutPage } from "./pages/CheckOutPage";
import GridProductDisplay from "./components/GridProductDisplay";
import Shop from "./pages/Shop";
import ProtectCheckout from "./components/ProtectCheckout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/:category/:id/:title" element={<SingleProductPage />} />
      <Route
        path="/checkout"
        element={
          <ProtectCheckout>
            <CheckOutPage />
          </ProtectCheckout>
        }
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/all/:category" element={<GridProductDisplay />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
