import React from 'react'
import SideNavbar from './_component/SideNavbar'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className='hidden md:block  md:w-64 h-screen bg-slate-100 fixed'>
        <SideNavbar />
      </div>
      <div className='md:ml-64'>{children}</div>
    </div>
  );
}

export default DashboardLayout