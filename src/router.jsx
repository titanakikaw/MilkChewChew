import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "Menu",
//         element: <Menu />,
//       },
//     ],
//   },
// ]);

const BaseComponent = () => {
  return (
    <>
      <Navbar />
      {<Outlet />}
      <Footer />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseComponent />}>
      <Route index element={<Home />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="Delivery" element={<Delivery />} />
      <Route path="Story" element={<Story />} />
      <Route path="Contact" element={<ContactUs />} />
    </Route>
  )
);
