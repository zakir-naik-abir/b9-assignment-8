// import React, { useState } from 'react'
import { useEffect, useState } from 'react';
import { deleteBook, getStoredBook } from '../Utility/Utility';
import ReadBooks from './ReadBooks';
import { useLoaderData } from 'react-router-dom';
// import { deleteBook, getStoredBook } from '../Utility/Utility';

const BookRead = () => {

  

  const books = useLoaderData()

  const [readBooks, setReadBooks] = useState([]);
  
  useEffect( () =>{
    const storedBooks = getStoredBook();
    // setReadBooks(storedBooks)

    if(books.length > 0){
      // const bookReaded = books.filter(book => storedBooks.includes(book.bookId))
      const bookReaded = [];
      for( const id of storedBooks){
        const book = books.find( book => book.bookId === id);
        if(book){
          bookReaded.push(book)
        }
      }
      setReadBooks(bookReaded)
      // console.log(books, storedBooks, bookReaded)
    }
  } ,[])

  const handleDelete = id =>{
    deleteBook(id)
    const bookReaded = getStoredBook();
    setReadBooks(bookReaded);
  }


  if(readBooks.length < 1){
    return 'Read book no Avaible'
  }

  return (
    <div>
      <div className='mx-10'>
        {
          readBooks.map(book => (<ReadBooks handleDelete={handleDelete}  deletable={true}   key={book.id} book={book}></ReadBooks>))
        }
      </div>
    </div>
  )
}

export default BookRead;