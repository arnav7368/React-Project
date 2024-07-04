import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <div className="container-fluid fixed-top px-0 wow fadeIn bg-dark" data-wow-delay="0.1s">
                <div className="col-lg-12 col-md-4 top-bar row gx-0 align-items-center d-none d-lg-flex mb-3">
                    <div className="col-lg-3 px-5 text-start">
                        <small><div className="d-flex">
                            <Link className="btn btn-bg-0 me-1 text-primary" to="#"><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-bg-0 me-1 text-primary" to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-bg-0 me-0 text-primary" to="#"><i className="fab fa-linkedin-in"></i></Link>
                        </div></small>

                    </div>
                    <div className="col-lg-9 px-5 text-end ">
                        <small className="ms-4 mailto"><Link to='mailto:arnavroy688@gmail.com' target='_blank' rel='noreferrer'><i className="fa fa-envelope me-2"></i>arnavroy688@gmail.com<span> </span></Link></small>
                        <small className="ms-4 phone"><Link to='phone:7368055121' target='_blank' rel='noreferrer'><i className="fa fa-phone me-2"></i>+91-7368055121<span> </span></Link></small>
                        <small className="ms-4 mailto"> <Link to='https://wa.me/7368055121' target='_blank' rel='noreferrer'><i className="fa fa-whatsapp me-2"></i>+91-7368055121</Link>
                        </small>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <Link to="/" className="navbar-brand ms-4">
                        <h1 className="fw-bold text-primary m-0">E<span className="text-secondary"><span className="text-warning">-</span>c</span>om</h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link active text-secondary">Home</Link>
                            <Link to="/about" className="nav-item nav-link text-secondary">About Us</Link>
                            <Link to="/shop" className="nav-item nav-link text-secondary">Shop</Link>
                            <Link to="/contactUs" className="nav-item nav-link text-secondary">Contact Us</Link>
                            {/* <Link to="/admin" className="nav-item nav-link text-secondary">Admin</Link> */}
                            {
                                localStorage.getItem("login") ?
                                    <div className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{localStorage.getItem("name")}</Link>
                                        <div className="dropdown-menu border-light m-0">
                                            <Link to={localStorage.getItem("role")==="Admin"?"/admin":"/profile"} className="dropdown-item">Profile</Link>
                                            {
                                                localStorage.getItem("role") === "Buyer" ?
                                                    <>
                                                        <Link to="/cart" className="dropdown-item">Cart</Link>
                                                        <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                                    </> : ""
                                            }
                                            <button className="dropdown-item" onClick={logout}>Logout</button>
                                        </div>
                                    </div> :
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
