import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'

const ProductCard = () => {
  return (
    <div className='col-3'>
      <Link to='#' className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <Link to='/'>
            <img src='images/wish.svg' alt='wishlist' />
          </Link>
        </div>
        <div className='product-image'>
          <img src='images/watch.jpg' className='img-fluid' alt='product' />
          <img src='images/watch-1.jpg' className='img-fluid' alt='product' />
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <div className='product-title'>
            <h5>Kids Headphone Bulk 10 Packs multi colored for students</h5>
          </div>
          <ReactStars
            count={5}
            size={24}
            value='3'
            edit={false}
            activeColor='#ffd700'
          />
          <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-10'>
            <Link to='#'>
              <img src='/images/view.svg' alt='addcart' />
            </Link>
            <Link to='#'>
              <img src='/images/add-cart.svg' alt='addcart' />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
