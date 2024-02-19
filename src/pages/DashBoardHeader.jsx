import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoardNavigation from '../components/DashBoardNavigation/DashBoardNavigation'
import { useSelector } from 'react-redux'
import CustomError from './CustomError';

function DashBoardHeader() {

  const data = useSelector((state) => state.auth);

  if(data.role !== 'super-admin'){
    return <CustomError/>
  }

  return (
    <div className='height-screen' style={{backgroundColor:'rgba(255, 255, 255, 0.853)', height:'92vh'}} >
      <DashBoardNavigation/>
      <Outlet/>
    </div>
  )
}

export default DashBoardHeader
