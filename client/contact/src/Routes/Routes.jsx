import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactListPage from "./Pages/ContactListPage";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import ThankYouPage from "./Pages/ThankYouPage.jsx";
import App from "../App"; // Root app component

const router = createBrowserRouter([
  {
    path: "contact-list",
    element: <ContactListPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "thank-you",
    element: <ThankYouPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
