import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Pages/Signup/index";
import Login from "./Pages/Login/index";
import NewListing from "./Pages/NewListing/Index";
import HomePage from "./Pages/HomePage/Index";
import CategoriesPage from "./Pages/CategoriesPage/Index";
import AboutPage from "./Pages/AboutPage/Index";
import WishlistPage from "./Pages/WishlistPage/Index";
import ExplorePage from "./Pages/ExplorePage/Index";
import CartPage from "./Pages/CartPage/Index";
import ProductDetailPage from "./Pages/ProductDetailPage/Index";
import ProfilePage from "./Pages/ProfilePage/Index";
import BrowsingPage from "./Pages/BrowsingPage";
import Footer from "./Components/Footer/Index";
import SignUp from "./Pages/Signup/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BrowsingPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Listing" element={<NewListing />} />
        <Route path="/Categories" element={<CategoriesPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Product-detail" element={<ProductDetailPage />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
