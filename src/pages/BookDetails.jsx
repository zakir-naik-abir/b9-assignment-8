import { useLoaderData, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { saveBook } from "../Utility/Utility";

const BookDetails = () => {

  const books = useLoaderData();
  const {bookId} = useParams();
  // console.log( bookId,books)
  const idInt = parseInt(bookId);
  
  const book = books.find(book => book.bookId === idInt)
  // console.log(book, idInt)

  const handletoReadBook = () =>{
    saveBook(idInt)
  }
  const handletoWishlish = () =>{
    saveBook(idInt)
    // toast('Add to Wishlist')
  }

  return (
    <div className='mt-5'>
      <div className="grid grid-cols-2 items-center gap-8 mx-20">
        <figure className=" bg-gray-400 items-center mx-auto p-8 rounded-lg">
          <img src={book.image} alt="Shoes" className="rounded-xl w-72" />
        </figure>
        <div className="mr-20">
          <h3>{book.bookName}</h3>
          <h4 className='border-b-2 pb-5'>By : {book.author}</h4>
          <h5 className='border-b-2 pb-5'>{book.category}</h5>
          <h6>{book.review}</h6>
          <div className="flex border-b-2 pb-5 gap-3">
            <h3>Tag:</h3>
            <div className="flex gap-5">
              <h5 className='bg-green-100 text-green-500 font-semibold p-2 rounded-2xl'> {book.tags}</h5>
              <h5 className='bg-green-100 text-green-500 font-semibold p-2  rounded-2xl'>{book.publisher}</h5>
            </div>
          </div>
          
          <div className=' justify-between mt-4'>   
            <div className='flex justify-between items-center'>
              <h5>Number of Pages:</h5>
              <h5>{book.totalPages}</h5>
            </div>
            <div className='flex justify-between items-center'>
              <h5>Publisher:</h5>
              <h5>{book.publisher}</h5>
            </div>
            <div className='flex justify-between items-center'>
              <h5>Year of Publishing:</h5>
              <h5>{book.yearOfPublishing}</h5>
            </div>
            <div className='flex justify-between items-center'>
              <h5>Rating</h5>
              <h5>{book.rating}</h5>
            </div>
          </div>
          <div className='flex gap-5'>
            <button onClick={() => handletoReadBook(book)} className='btn btn-outline'>Read</button>
            <button onClick={() => handletoWishlish()} className='btn btn-primary'>Wishlist</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default BookDetails;