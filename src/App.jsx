import "./App.css";
// react-router
import { Route, Routes, BrowserRouter } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage";
// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
