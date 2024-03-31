import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import BooksCard from "../components/BooksCard"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

const Home = () => {

  const books = useLoaderData()

  const [dataLength, setDataLength] = useState(6);

  return (
    <div>
      <Helmet>
        <title>Book Vibe | Home</title>
      </Helmet>
      <Banner></Banner>
      
      <div className="mt-10 mx-10">
        <h2 className='text-center'>Books: {books.length}</h2>
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            books.slice(0, dataLength).map(book => (<BooksCard key={book.id} book={book}></BooksCard>))
          }
        </div>
        <div className={ dataLength === books.length && 'hidden'}>
          <button onClick={() => setDataLength(books.length)} className="btn btn-secondary mt-6">Show All Book</button>
        </div>
      </div>
    </div>
  )
}

export default Home;