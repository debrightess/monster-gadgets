import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h3 className='mb-0 text-white'>Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='You Email Address'
                  aria-label='You Email Address'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Demo Store <br /> No. 1259 Freedom, New York, 11111 <br />
                  United States <br />
                </address>
                <a
                  href='tel:+91 8264954342'
                  className='mt-3 d-block mb-1 text-white'
                >
                  +91 8264954342
                </a>
                <a
                  href='mailto:gadgetify@gmail.com'
                  className='mt-2 d-block mb-0 text-white'
                >
                  gadgetify@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://twitter.com/'>
                    <BsTwitter className='fs-4' />
                  </a>
                  <a className='text-white' href='https://www.instagram.com/'>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href='https://www.facebook.com/'>
                    <BsFacebook className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='#' className='text-white py-2 mb-1'>
                  Privacy Policy
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Refund Policy
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Shipping Policy
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Terms & Conditions
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Blog
                </Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='#' className='text-white py-2 mb-1'>
                  About Us
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Faq
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Contact
                </Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='#' className='text-white py-2 mb-1'>
                  Laptops
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Headphones
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Tablets
                </Link>
                <Link to='#' className='text-white py-2 mb-1'>
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}, Powered by Gadgetify
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
