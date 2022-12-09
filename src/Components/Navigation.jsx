import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='flex mx-auto items-center justify-around text-white h-12 bg-red-700'>
      <div>
        <h1 className='font-bold text-2xl'>Logo<span className='text-cyan-500'>Picture</span> </h1>
      </div>
      <div>
        <ul className='flex mx-auto items-center justify-around'>
            <li className='mr-10'><Link to="/">Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
