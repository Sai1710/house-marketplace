import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./Pages/Explore";
import Offers from "./Pages/Offers";
import SignUp from "./Pages/SignUp";
import Signin from "./Pages/Signin";
import ForgotPassword from "./Pages/ForgotPassword";
import EditListing from "./Pages/EditListing";
import Contact from "./Pages/Contact";
import Category from "./Pages/Category";
import "react-toastify/dist/ReactToastify.css";
import Listing from "./Pages/Listing";
import CreateListing from "./Pages/CreateListing";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/create-listing" element={<CreateListing />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/contact/:landlordId" element={<Contact />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>

        <Navbar></Navbar>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
