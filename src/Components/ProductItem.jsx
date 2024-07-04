import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({item}) {
    return (
        <div className="card mx-2 h-80">
            <img src={`/images/${item.pic[0]}`} className="card-img-top" style={{ height: 200, width: "100%" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><del className='text-danger'><b>&#8377;{item.baseprice} </b></del><sup className='text-secondary'>{item.discount}% Off </sup><b className='text-primary'>&#8377;{item.finalprice}</b></p>
                <Link to={`/single-product/${item.id}`} className="btn btn-primary" style={{ margin: "auto" }}>Add to Cart</Link>
            </div>
        </div>
    )
}
