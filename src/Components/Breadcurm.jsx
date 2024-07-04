import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcurm({ title }) {
  return (
    <>
      <div className="container-fluid page-header wow fadeIn mt-5" data-wow-delay="0.1s">
        <div className="container">
          <h1 className="mb-3 animated slideInDown">{title}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link className="text-body" to="/">Home</Link></li>
              <li className="breadcrumb-item text-dark active" aria-current="page">{title}</li>
            </ol>
          </nav>
        </div>
      </div>
      
    </>
  )
}
