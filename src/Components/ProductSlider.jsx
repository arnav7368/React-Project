import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function ProductSlider({data}) {
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
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1080: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    }
    return (
        <OwlCarousel className='owl-theme' {...option} nav>
            {
                data.map ((item,index) => {
                    return <div className="card mx-2" key={index}>
                    <img src={`/images/${item.pic[0]}`} className="card-img-top" style={{height:200, width:"100%"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text"><del className='text-danger'><b>&#8377;{item.baseprice} </b></del><sup className='text-secondary'>{item.discount}% Off </sup><b className='text-primary'>&#8377;{item.finalprice}</b></p>
                        <a href="#" className="btn btn-primary" style={{marginLeft:"70px"}}>Add to Cart</a>
                    </div>
                </div>
                })
            }
        </OwlCarousel>
    )
}
