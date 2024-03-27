import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme)
  } ,[theme])


  const handleToggle = e =>{ 
    // console.log(e.target.value)
    if(e.target.checked) {
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }
  // console.log(theme)

  const links = <div className='flex gap-5 text-xl'>
    <NavLink to={'/'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Home</NavLink>

    {/* <NavLink to={'/bookdetails'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Details</NavLink> */}

    <NavLink to={'/listedbooks'}  className={({isActive}) => isActive? 'text-primary font-semibold' : 'font-semibold'}>Listed Books</NavLink>

   <NavLink to={'/pagestoread'} className={({isActive}) => isActive ? 'text-primary font-semibold' : 'font-semibold'}>Pages to Read</NavLink>
    {/* <NavLink to={'/blogs'}> Blogs</NavLink> */}
  </div>

  return (
    <div>
      <div className="navbar bg-slate-50 rounded-lg mt-0 shadow-lg fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">            
              {links}
            </ul>
          </div>
          <a className=" text-gray-600 font-bold text-3xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">      
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-8"> 
          <label className="flex cursor-pointer gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
            <input onChange={handleToggle} type="checkbox" className="toggle theme-controller"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </label>
          <div className='space-x-5'>
            <button className='btn btn-success'>Sign In</button>
            <button className='btn btn-primary'>Sign Up</button>
          </div>
        </div>
      </div>      

    </div>
  )
}

export default Navbar;