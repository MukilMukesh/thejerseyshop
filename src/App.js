import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { products, retro } from './components/data/productData';
import "./App.css";
import Homepage from "./Homepage";
import ProductDetails from './components/products/productDetails';
import ProductList from './pages/allProducts';
import TargetPage from "./pages/newarrivalpage";
import RetroPage from "./pages/retropage";
import Header from "./components/header/header"; // Import Header
import Footer from "./components/footer/footer"; // Import Footer
import Category from "./components/categories/categories"
const allProducts = [...products, ...retro];

// Layout Component for Default Header and Footer
const Layout = ({ children }) => {
  return (
    <>


      <Header products={allProducts} />
      <Category />
      <main className="main-content">{children}</main>
      <Footer /> {/* Always visible */}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes wrapped with Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Homemain />
            </Layout>
          }
        />
        <Route
          path="/Homepage"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/allProducts"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
        <Route
          path="/newarrivalpage"
          element={
            <Layout>
              <TargetPage />
            </Layout>
          }
        />
        <Route
          path="/retropage"
          element={
            <Layout>
              <RetroPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

// Homemain Component (unchanged)
function Homemain() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Homepage");
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Go to Shopping Page</button>
      </header>
    </div>
  );
}

export default App;
