import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div className="list-group">
        <h5><Link to="/admin" className="list-group-item list-group-item-action active" aria-current="true">
        <span className='text-warning'>A</span>dmin <span className='text-warning'>H</span>ome
        </Link></h5>
        <Link to="/admin/user" className="list-group-item list-group-item-action"><i className="fa fa-users text-primary"></i><span className='text-primary float-end'>Users</span></Link>
        <Link to="/admin/maincategory" className="list-group-item list-group-item-action"><i className="fa fa-list text-primary"></i><span className='text-primary float-end'>Maincategory</span></Link>
        <Link to="/admin/subcategory" className="list-group-item list-group-item-action"><i className="fa fa-list text-primary"></i><span className='text-primary float-end'>Subcategory</span></Link>
        <Link to="/admin/brand" className="list-group-item list-group-item-action"><i className="fa fa-tag text-primary"></i><span className='text-primary float-end'>Brand</span></Link>
        <Link to="/admin/product" className="list-group-item list-group-item-action"><i className="fa fa-product-hunt text-primary"></i><span className='text-primary float-end'>Products</span></Link>
        <Link to="/admin/testimonial" className="list-group-item list-group-item-action"><i className="fa fa-star text-primary"></i><span className='text-primary float-end'>Testimonial</span></Link>
        <Link to="/admin/newsletter" className="list-group-item list-group-item-action"><i className="fa fa-envelope text-primary"></i><span className='text-primary float-end'>Newsletter</span></Link>
        <Link to="/admin/contact" className="list-group-item list-group-item-action"><i className="fa fa-phone text-primary"></i><span className='text-primary float-end'>Contactus</span></Link>
        <Link to="/admin/checkout" className="list-group-item list-group-item-action"><i className="fa fa-shopping-bag text-primary"></i><span className='text-primary float-end'>Checkout</span></Link>
      </div>
    </>
  )
}
