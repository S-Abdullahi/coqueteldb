import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
        <h2 className='title'>Opps! it's a dead end</h2>
        <Link to='/' className='btn btn-home'>Back to home</Link>
    </div>
  )
}

export default Error