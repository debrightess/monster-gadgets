import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p>
                Hotline: <a href='tel:+91 3562786451'>+91 3562786451</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
