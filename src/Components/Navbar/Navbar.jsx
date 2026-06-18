import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black'>
        <Link className='btn  m-3 btn-outline-info' to="/">Home</Link>
        <Link className='btn  m-3 btn-outline-info' to="/clock">Clock</Link>
        <Link className='btn  m-3 btn-outline-info' to="/expense">Expense</Link>
        <Link className='btn  m-3 btn-outline-info' to="/progress">Progress</Link>
        <Link className='btn  m-3 btn-outline-info' to="/todo">Contact</Link>
    </div>
  )
}

export default Navbar