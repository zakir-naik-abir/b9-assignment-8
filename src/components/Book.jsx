import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import placeholderImage from '../assets/404'

const Book = ({book}) => {
 const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <div className='mt-10 shadow-gray-500 border-2'> 
      <div className="card  bg-base-100 shadow-xl">
        <figure className=" max-w-56 max-h-72 mx-auto bg-gray-400 mt-5">
          <NavLink to={`/bookdetails/${bookId}`} className="hover:scale-105"><img src={image} alt="Book Cover Photo" className="rounded-xl" /></NavLink>
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h5 className='bg-green-500 text-green-800 font-semibold px-4 p-1 rounded-3xl'>{tags[0]}</h5>
            <h5 className='bg-green-500 text-green-800 font-semibold px-4 p-1  rounded-3xl'>{tags[1]}</h5>
          </div>
          <h4>{bookName}</h4>
          <h4 className='border-b-2 pb-5'>By : {author}</h4>
          <div className='flex justify-between mt-4'>
            <h5>{category}</h5>
            <h5 className="flex items-center gap-2">{rating}  <FaRegStar></FaRegStar></h5>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Book;