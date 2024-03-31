
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import PagesToRead from './pages/PagesToRead';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import BookRead from './components/BookRead.jsx';
import WishList from './components/WishList.jsx';
import Signin from './Register/Signin.jsx';
import Signup from './Register/Signup.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/bookdetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json'),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json'),
        children:[
          {
          index: true,
          element: <BookRead></BookRead>,
          loader: () => fetch('../books.json'),
          },
          {
            path: 'wishlist',
            element: <WishList></WishList>
          }
        ]
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ]
  },
]);