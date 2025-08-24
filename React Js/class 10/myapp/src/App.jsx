import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import NotFound from "./pages/notFound";
import Product from "./pages/product";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />



        <Route path="/product" element={<Product />}   />
      
        {/* <Route path="/product/:name" element={<ProductDetails />}   /> */}
        <Route path="/product/:id" element={<ProductDetails />}   />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
