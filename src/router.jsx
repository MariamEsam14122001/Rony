import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Signup from "./pages/signup/Signup.jsx";
import UserOwner from "./pages/userowner/UserOwner.jsx";
import Login from "./pages/login/Login.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import SearchPage from "./pages/search/SerchPage.jsx";
import Userform from "./pages/profiles/Userprofile.jsx";
import Ownerform from "./pages/profiles/Ownerprofile.jsx";
import WishList from "./pages/wishlist/WishList.jsx";
import Contact from "./pages/contact&about/ContactAbout.jsx";
import Uploadform from "./pages/upload/Upload-image.jsx";
import { WishlistProvider } from "./Context/WishlistContext.jsx";
import Owner from "./pages/ownerhome/OwnerHome.jsx";
import PropertyDetails from "./pages/property/Propperty.jsx";
import EditProperty from "./pages/owneredite/ownersedit.jsx";
import Support from "./pages/support/Support.jsx";
import ProvidersAccounts from "./pages/dashboard/ProvidersAccounts.jsx";
import Accomodations from "./pages/dashboard/Accommodations.jsx";
import Deactivatedaccounts from "./pages/dashboard/Deactivatedaccounts.jsx";
import UsersAccounts from "./pages/dashboard/UsersAccounts.jsx";
import PrivateRoute from "./Context/PrivateRoute.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/Getstarted", element: <UserOwner /> },
  { path: "/Signup/:userType", element: <Signup /> },
  { path: "/Login", element: <Login /> },
  { path: "/Admin", element: <PrivateRoute element={<AdminDashboard />} /> },
  { path: "/search", element: <SearchPage /> },
  {
    path: "/wishlist",
    element: (
      <PrivateRoute
        element={
          <WishlistProvider>
            <WishList />
          </WishlistProvider>
        }
      />
    ),
  },
  { path: "/userform", element: <PrivateRoute element={<Userform />} /> },
  { path: "/ownerform", element: <PrivateRoute element={<Ownerform />} /> },
  { path: "/contact", element: <Contact /> },
  { path: "/upload", element: <PrivateRoute element={<Uploadform />} /> },
  { path: "/owner", element: <PrivateRoute element={<Owner />} /> },
  { path: "/details/:id", element: <PropertyDetails /> },
  { path: "/edit/:id", element: <PrivateRoute element={<EditProperty />} /> },
  { path: "/help", element: <Support /> },
  { path: "/provider", element: <ProvidersAccounts /> },
  { path: "/accomodations", element: <Accomodations /> },
  {
    path: "/deactivated",
    element: <Deactivatedaccounts />,
  },
  { path: "/user", element: <UsersAccounts /> },
]);

export default router;
