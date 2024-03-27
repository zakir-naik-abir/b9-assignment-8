import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../Utility/Utility';
import ReadBooks from '../components/ReadBooks';


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

      <div className='flex  m-10 '>
          <NavLink to={'/listedbooks'} className={'border border-b-0 btn  rounded-t-lg px-5 py-3'}>
            <h4>Read Books: {readBooks.length}</h4>
          </NavLink>
          <NavLink  className={'px-5 py-3 border-b-2 flex-1'}>
            <h4>Wishlist Books</h4>
          </NavLink>
        </div>

      <div className='mx-10'>
        {
          readBooks.map(book => (<ReadBooks key={book.id} book={book}></ReadBooks>))
        }
      </div>
    </div>
    
  )
}

export default ListedBooks;