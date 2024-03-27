
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=''>
      {/* state components */}
      <div className='h-16'>
      <Navbar></Navbar>
      </div>

      {/* children pages */}
      <div className='min-h-[calc(100vh-116px)]'>
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default MainLayout;