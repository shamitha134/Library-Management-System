import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouteLayout from "./pages/RouteLayout";
import Catalogue from "./components/Catalogue";
import BookForm from "./components/BookForm";
import BookPage from "./pages/BookPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Users from "./pages/Users";

const book = {
  publicationYear: 1988,
  availability: false,
  author: "Barbra Streisand",
  title: "MY NAME IS BARBRA",
  description:
    "The EGOT winner chronicles her journey in show business and reveals details about some of her personal relationships.",
  book_image:
    "https://storage.googleapis.com/du-prd/books/images/9780525429524.jpg",
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/",
      element: <RouteLayout />,
      children: [
        { path: "catalogue", element: <Catalogue /> },
        { path: "add-book", element: <BookForm /> },
        {
          path: "book/:id",
          element: <BookPage {...book} />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

App.propTypes = {};

export default App;
