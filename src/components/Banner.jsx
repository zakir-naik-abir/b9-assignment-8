import { NavLink } from "react-router-dom"

const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-gray-300 mt-5 p-12 rounded-lg">
      <div className="">
        <h2 className="mb-10">Books To Freshen Up <br />Your Bookshelf</h2>
        <NavLink to={'./listedbooks'}><button className="btn btn-success">View The List</button></NavLink>
      </div>
      <img className="md:w-60 bg-slate-50 p-5 rounded-sm" src='banner.jpg' alt="" />
    </div>
  )
}

export default Banner;