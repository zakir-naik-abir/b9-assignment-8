import { CiLocationOn } from "react-icons/ci";
import { CgReadme } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { MdOutlinePeopleAlt } from "react-icons/md";



const ReadBooks = ({book,handleDelete}) => {
  const{ bookName, bookId , author, image, category, rating, tags, publisher, totalPages, yearOfPublishing } = book;

  
  return (
    <div className='mt-5'>
      <div className="flex gap-8 m-4 items-center bg-slate-100 py-4 rounded-lg">
        <figure className=" bg-gray-400 items-center mx-auto p-7 rounded-lg">
          <img src={image} alt="book" className="rounded-xl max-w-40 max-h-64" />
        </figure>
        <div className="mr-20 w-4/6">
          <div className="flex justify-between">
            <h5 className="font-semibold">{bookName}</h5>
            <button onClick={() => handleDelete(bookId)} className="btn btn-secondary">Remove</button>
          </div>
          <h5 className='border-b-2 pb-5'>By : {author}</h5>
          <div className="flex border-b-2 pb-5 items-center mt-5 gap-7">
            <h5>Tag</h5>
            <p className='bg-green-100 text-green-500 font-semibold p-2 rounded-2xl'># {tags}</p>
            <p className='bg-green-100 text-green-500 font-semibold p-2  rounded-2xl'># {publisher}</p>
            <div className="flex items-center gap-3">
              <h6>
                <CiLocationOn></CiLocationOn>
              </h6>
              <div className="flex items-center gap-2">
                <h6>Year of Publishing:</h6>
                <h6>{yearOfPublishing}</h6>
              </div>
            </div>
            
          </div>

          <div className='flex border-b-2 my-5 pb-5 gap-5'>
            <div className='flex gap-2 items-center'>
              <h4><MdOutlinePeopleAlt></MdOutlinePeopleAlt></h4>
              <h5>Publisher:</h5>
              <h5> { publisher}</h5>
            </div>
            <div className='flex gap-3 items-center'>
              <h4><CgReadme></CgReadme></h4>
              <h5>Page:</h5>
              <h5>{totalPages}</h5>
            </div>
          </div>
          
          <div className='flex gap-9 mt-5 items-center'>
            <div className='flex gap-4 px-3 p-2 rounded-3xl bg-blue-300'>
              <p>Category:</p>
              <p>{category}</p>
            </div>
            <div className='flex gap-4 bg-yellow-200 px-3 p-2 rounded-3xl'>
              <p>Raging:</p>
              <p>{rating}</p>
            </div>
            <NavLink to={`/bookdetails/${bookId}`} className={'btn btn-success'}><h5>View Details</h5></NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ReadBooks;