import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';

import {getTestimonial} from '../Store/ActionCreaters/TestimonialActionCreators'

export default function Testimonial() {
    let [data,setData] = useState([])
    let dispatch = useDispatch()
    let TestimonialStateData = useSelector(state=>state.TestimonialStateData)
    let option = {
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 10,
        responsiveRefreshRate: 1000,
        dots: false,
        navText: ["<button style='border:none; background-Color:blue;color:white;border-radius:50%;height:40px;width:40px; margin-right:10px'><i class='fa fa-arrow-right'></button>", "<button style='border:none; background-Color:blue;color:white;border-radius:50%;height:40px;width:40px; margin-left:10px'><i class='fa fa-arrow-left'></button>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1080: {
                items: 3
            },
            1920: {
                items: 4
            }
        }
    }
    function getAPIData(){
        dispatch(getTestimonial())
        if(TestimonialStateData.length)
            setData(TestimonialStateData)
    }
    useEffect(() => {
        getAPIData()
    }, [TestimonialStateData.length])
    return (
        <>
            <div className="container-fluid bg-light bg-icon py-6 mb-5">
                <div className="container">
                    <div className="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                        <h1 className="display-5 mb-3">Customer Review</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <OwlCarousel className='owl-theme' {...option} nav>
                        {
                            data.map((item,index)=>{
                                return<div className="testimonial-item position-relative bg-white p-5 mt-4 border" key={index}>
                                <i className="fa fa-quote-right fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                                <p className="testimonial-msg mb-4">{item.message}</p>
                                <div className="d-flex align-items-center">
                                    <img className="flex-shrink-0 rounded-circle" style={{ height: 100, width: 100 }} src={`/images/${item.pic}`} alt="" />
                                    <div className="ms-3">
                                        <h5 className="mb-1 text-primary">{item.name}</h5>
                                        {/* <span>Profession</span> */}
                                    </div>
                                </div>
                            </div>
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}
