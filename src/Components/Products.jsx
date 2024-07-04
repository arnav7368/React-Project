import React from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
  return (
    <>
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0 gx-5 align-items-end">
                <div className="col-lg-6">
                    <div className="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                        <h1 className="display-5 mb-3">Our Products</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                </div>
                <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                        <li className="nav-item me-2">
                            <Link className="btn btn-outline-primary border-2 active" data-bs-toggle="pill" to="##tab-1">Vegetable</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="btn btn-outline-primary border-2" data-bs-toggle="pill" to="##tab-2">Fruits </Link>
                        </li>
                        <li className="nav-item me-0">
                            <Link className="btn btn-outline-primary border-2" data-bs-toggle="pill" to="##tab-3">Fresh</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="#">Browse More Products</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="#">Browse More Products</Link>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-1.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-2.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-3.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-4.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-6.jpg" alt="#"/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-7.jpg" alt="#"/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="product-item">
                                <div className="position-relative bg-light overflow-hidden">
                                    <img className="img-fluid w-100" src="img/product-8.jpg" alt="#"/>
                                    <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                                </div>
                                <div className="text-center p-4">
                                    <Link className="d-block h5 mb-2" to="#">Fresh Tomato</Link>
                                    <span className="text-primary me-1">$19.00</span>
                                    <span className="text-body text-decoration-line-through">$29.00</span>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="w-50 text-center border-end py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-eye text-primary me-2"></i>View detail</Link>
                                    </small>
                                    <small className="w-50 text-center py-2">
                                        <Link className="text-body" to="#"><i className="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="#">Browse More Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
