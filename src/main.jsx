import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import ReadToBooks from './pages/ReadToBooks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ListedBooks from './pages/ListedBooks.jsx';
import BookDetails from './pages/BookDetails.jsx';
// import ReadBooks from './components/ReadBooks.jsx';
// import ReadBooks from './components/ReadBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children: 
    [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/bookdetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../books.json')
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../books.json'),
      },
      // {
      //   path: '/readbooks',
      //   element: <ReadBooks></ReadBooks>,
      //   loader: () => fetch('../books.json')
      // },
      {
        path: "/pagestoread",
        element: <ReadToBooks></ReadToBooks>,
      },
    ]
  },

 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
