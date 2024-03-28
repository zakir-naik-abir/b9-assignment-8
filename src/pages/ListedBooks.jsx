import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/Utility';


const ListedBooks = () => {

  const books = useLoaderData()
  
  const [readBooks, setReadBooks] = useState([]);
  useEffect( () =>{
    const storedBooks = getStoredBook();
    // console.log(storedBooks)
    if(books.length > 0){
      // const bookReaded = books.filter(book => storedBooks.includes(book.bookId))
      const bookReaded = [];
      for( const id of storedBooks){
        const book = books.find( book => book.bookId === id);
        if(book){
          bookReaded.push(book)
        }
      }
      // console.log(books, storedBooks, bookReaded)
      setReadBooks(bookReaded)
    }
  } ,[])



  // read and wish book tab
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className='mx-5'>
      <div className='mt-5'>
        <div className='text-center'>
          <h2 className='w-full bg-gray-200'>Books</h2> 
        </div>

        <div className='text-center mt-10'>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1 btn-success">Shor By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Rating</a></li>
              <li><a>Number of Pages</a></li>
              <li><a>Published Year</a></li>
            </ul>
          </div>
        </div>
      </div>  

{/* tabs start */}
      <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link
         to={''}
          onClick={() =>setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-lg dark:border-gray-600 dark:text-gray-600`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Read Books: {readBooks.length}</span>
        </Link>
        <Link 
          to={`wishlist`}
         onClick={() =>setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>WishList Books</span>
        </Link>
      </div>
{/* tabs end */}
<Outlet></Outlet>
    </div> 
  )
}

export default ListedBooks;