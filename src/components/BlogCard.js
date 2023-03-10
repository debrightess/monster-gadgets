import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' alt='blog' className='img-fluid' />
        </div>
        <div className='blog-content'>
          <p className='date'>11 June, 2022</p>
          <h5 className='title'>A beautiful sunday morning renaissance</h5>
          <p className='desc'>
            You're Only As Good As Your Last Collection. Which is An Enormous
            Pressure. I Think There is Something About...
          </p>
          <Link to='/' className='button'>
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
