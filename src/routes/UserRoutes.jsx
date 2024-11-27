/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { protectRoute } from "../utils/authentication/Auth";

// Authentication Pages
const UserSignInPage = lazy(() =>
  import("../pages/signUpSignInPages/UserSignInPage")
);
const UserSignUpPage = lazy(() =>
  import("../pages/signUpSignInPages/UserSignUpPage")
);
const OTPPage = lazy(() =>
  import("../pages/signUpSignInPages/OtpVerificationPage")
);
const ForgotPasswordPage = lazy(() =>
  import("../pages/signUpSignInPages/forgotPasswordPages/ForgotPasswordPage")
);
const CreateNewPasswordPage = lazy(() =>
  import("../pages/signUpSignInPages/forgotPasswordPages/CreateNewPasswordPage")
);
const OtpForgotPasswordPage = lazy(() =>
  import("../pages/signUpSignInPages/forgotPasswordPages/OtpForgotPasswordPage")
);
const AddProfilePage = lazy(() =>
  import("../pages/signUpSignInPages/AddProfilePage")
);

// Home, Profile, and Settings Pages
const Home = lazy(() => import("../pages/userHomePages/HomePage/Home"));
const UserProfile = lazy(() => import("../pages/userProfilePage/UserProfile"));
const EditProfile = lazy(() => import("../pages/editProfilePage/EditProfile"));
const SecurityPage = lazy(() => import("../pages/securityPage/SecurityPage"));
const NotificationSettingsPage = lazy(() =>
  import("../pages/NotificationSettingsPage/NotificationSettingsPage")
);

// Service Pages
const ServicesPage = lazy(() =>
  import("../pages/serviceProviderListingPage/ServicesPage")
);
const RequestServicePage = lazy(() =>
  import("../pages/requestServicePages/RequestServicePage")
);
const ActiveServicesPage = lazy(() =>
  import("../pages/userHomePages/ActiveServicesPage")
);
const ActiveServiceDetails = lazy(() =>
  import("../pages/BookingDetailsPages/ActiveServiceDetails")
);
const CompletedServicesPage = lazy(() =>
  import("../pages/userHomePages/CompletedServicesPage")
);

// Category and Provider Pages
const AllCategoryComponent = lazy(() =>
  import(
    "../components/user/allCategoryAndSubCategoryComponent/allCategoryComponent/AllCategoryComponent"
  )
);
const SubCategoriesPage = lazy(() =>
  import("../pages/allCategoryAndSubCategoryPage/SubCategoryPage")
);
const ProviderProfile = lazy(() =>
  import("../pages/ProviderProfilePage/ProviderProfile")
);

// Booking and Review Pages
const BookingsPage = lazy(() => import("../pages/userHomePages/BookingsPage"));
const BookingDetails = lazy(() =>
  import("../pages/BookingDetailsPages/BookingDetails")
);
const ReviewSection = lazy(() =>
  import("../components/user/reviewsPageComponents/ReviewSection")
);
const ReviewSubmitPage = lazy(() =>
  import("../components/user/reviewSubmitComponents/ReviewSubmitPage")
);

// Complaint and Transaction Pages
const ComplaintsPage = lazy(() =>
  import("../pages/userHomePages/ComplaintsPage")
);
const ComplaintFormPage = lazy(() =>
  import("../pages/ComplaintFormPage/ComplaintFormPage")
);
const TransactionsPage = lazy(() =>
  import("../pages/transactionsPage/TransactionsPage")
);
const ComplaintsPageUser = lazy(() =>
  import("../components/user/complaintsPageComponents/ComplaintsPageUser")
);

// Additional Pages
const TermsAndConditionPage = lazy(() =>
  import("../pages/termsAndConditionPage/TermsAndConditionPage")
);
const PaymentMethodPage = lazy(() =>
  import("../pages/paymentMethodsPages/PaymentMethodPage")
);
const NotificationsPage = lazy(() =>
  import("../pages/userHomePages/NotificationPage")
);
const HelpCenterPage = lazy(() =>
  import("../pages/helpCenterPage/HelpCenterPage")
);
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));

// Layouts and Error Pages
const MainLayout = lazy(() => import("../layouts/UserLayout"));
const Error404Page = lazy(() => import("../pages/ErrorPages/Error404Page"));
const Error403Page = lazy(() => import("../pages/ErrorPages/Error403Page"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout"));

// Router Configuration
const UserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      // Public Routes
      {
        path: "/",
        element: <Navigate to="/sign-in" />,
      },

      {
        path: "/sign-in",
        element: <UserSignInPage />,
      },

      {
        path: "/sign-up",
        element: <UserSignUpPage />,
      },
      {
        path: "/otp",
        element: <OTPPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/create-new-password",
        element: <CreateNewPasswordPage />,
      },
      {
        path: "/otp-forgot-password",
        element: <OtpForgotPasswordPage />,
      },
      {
        path: "/add-profile",
        element: <AddProfilePage />,
      },
      {
        path: "/fill-your-profile",
        element: <AddProfilePage />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Protected Routes
      {
        path: "/home",
        element: <Home />,
        loader: protectRoute,
      },
      {
        path: "/profile",
        element: <UserProfile />,
        loader: protectRoute,
      },
      {
        path: "/edit-profile",
        element: <EditProfile />,
        loader: protectRoute,
      },
      {
        path: "/security",
        element: <SecurityPage />,
        loader: protectRoute,
      },
      {
        path: "/notification-settings",
        element: <NotificationSettingsPage />,
        loader: protectRoute,
      },

      // Service Routes
      {
        path: "/services",
        element: <CompletedServicesPage />,
        loader: protectRoute,
      },
      {
        path: "/active-services",
        element: <ActiveServicesPage />,
        loader: protectRoute,
      },
      {
        path: "/service-details/:id",
        element: <ActiveServiceDetails />,
        loader: protectRoute,
      },
      {
        path: "/service-provider-list/:id",
        element: <ServicesPage />,
        loader: protectRoute,
      },
      {
        path: "/request-service/:id",
        element: <RequestServicePage />,
        loader: protectRoute,
      },

      // Category and Provider Routes
      {
        path: "/categories",
        element: <AllCategoryComponent />,
        loader: protectRoute,
      },
      {
        path: "/subcategories/:categoryId",
        element: <SubCategoriesPage />,
        loader: protectRoute,
      },
      {
        path: "/provider-profile/:id",
        element: <ProviderProfile />,
        loader: protectRoute,
      },

      // Booking and Review Routes
      {
        path: "/bookings",
        element: <BookingsPage />,
        loader: protectRoute,
      },
      {
        path: "/booking-details/:id",
        element: <BookingDetails />,
        loader: protectRoute,
      },
      {
        path: "/reviews",
        element: <ReviewSection />,
        loader: protectRoute,
      },
      {
        path: "/review-submit/:id",
        element: <ReviewSubmitPage />,
        loader: protectRoute,
      },

      // Complaint and Transaction Routes
      {
        path: "/complaints",
        element: <ComplaintsPage />,
        loader: protectRoute,
      },
      {
        path: "/complaint-submit/:id",
        element: <ComplaintFormPage />,
        loader: protectRoute,
      },
      {
        path: "/complaint-form/:id",
        element: <ComplaintsPageUser />,
        loader: protectRoute,
      },
      {
        path: "/transactions",
        element: <TransactionsPage />,
        loader: protectRoute,
      },
      {
        path: "/payment-methods/:id",
        element: <PaymentMethodPage />,
        loader: protectRoute,
      },

      // Additional Routes
      {
        path: "/notification",
        element: <NotificationsPage />,
        loader: protectRoute,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditionPage />,
        loader: protectRoute,
      },
      {
        path: "/help-center",
        element: <HelpCenterPage />,
        loader: protectRoute,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
        loader: protectRoute,
      },
    ],
  },
  { path: "/*", element: <Error404Page /> },
  { path: "/403", element: <Error403Page /> },
]);

<Suspense fallback={<div>Loading...</div>}>
  <RouterProvider router={UserRouter} />
</Suspense>;

export default UserRouter;
