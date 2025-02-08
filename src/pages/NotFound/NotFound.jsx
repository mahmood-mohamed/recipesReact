import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container font-semibold text-2xl text-center flex flex-col items-center mt-16'>
      <span>404 Error...</span>
      <p>OPPs Page NotFound</p>
      <Link to={'/'} className='text-blue-400 mt-4'>Go to home</Link>
    </div>
  )
}
