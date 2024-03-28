
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import ReadToBooks from './pages/ReadToBooks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import BookRead from './components/BookRead.jsx';
import WishList from './components/WishList.jsx';
import ReadBooks from './components/ReadBooks.jsx';

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
        element: <ReadToBooks></ReadToBooks>,
      },
    ]
  },
]);