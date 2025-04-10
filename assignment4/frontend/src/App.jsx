import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetail";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow">
    <Routes>
    <Route path="/" element={
          <>
            <Hero />
            <ProductList />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </main>
  <Footer />
</div>

  );
};

export default App;
