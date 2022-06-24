import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import './carousel.css'


function Carousel() {

    const carouselItems = [
        {
            isVideo: true,
            title: "Your everyday summer essentials",
            video1: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/f_webm/landing-pages/pages/US/women/Q3HowItWorks/videos/Summer_merch.webm",
            video2: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/landing-pages/pages/US/women/Q3HowItWorks/videos/Summer_merch.mp4"
        },
        {
            isVideo: false,
            image: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0,w_340/landing-pages/pages/US/women/Q3HowItWorks/Carousel_2_W_jeans.jpg",
            text: "We know fit—we’ll find yours",
            pricing: "Jeans from $44 to $250"
        },
        {
            isVideo: true,
            title: "Athleisure days, your way",
            video1: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/f_webm/landing-pages/pages/US/women/Q3HowItWorks/videos/Women_resort.webm",
            video2: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/landing-pages/pages/US/women/Q3HowItWorks/videos/Women_resort.mp4"
        },
        {
            isVideo: false,
            image: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0,w_340/landing-pages/pages/US/women/Q3HowItWorks/Layered_image.jpg",
            text: "Dress up for your kind of vacation",
            pricing: "Accessories from $28 - $175"
        },
        {
            isVideo: true,
            title: "Work-ready looks, defined by you",
            video1: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/f_webm/landing-pages/pages/US/women/Q3HowItWorks/videos/Women_workwear.webm",
            video2: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/landing-pages/pages/US/women/Q3HowItWorks/videos/Women_workwear.mp4"
        }
    ]
    
    const scrollToNextPage = () => {
        document.querySelector('.gallery ul').scrollBy(document.querySelector('.gallery ul li').clientWidth, 0);
    }
    const scrollToPrevPage = () => {
        document.querySelector('.gallery ul').scrollBy(-document.querySelector('.gallery ul li').clientWidth, 0);
    }

    
    return (
        <div id="carousel">
            <div className="container">
                <div className="header">
                    <h1>Tell us what you like, we’ll find what you love</h1>
                    <p>We get to know your style, fit and price range based on your style quiz, requests and feedback.</p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="gallery">
                            <ul>
                                {
                                    carouselItems.map((value, index) => {
                                        return <li key={index}>
                                            {
                                                value.isVideo ? <>
                                                    <p>{value.title}</p>
                                                    <div className="video">
                                                        <video poster="https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/landing-pages/pages/US/women/Q3HowItWorks/videos/Summer_merch.jpg" muted loop playsInline autoPlay>
                                                            <source src={value.video1} type="video/webm" />
                                                            <source src={value.video2} type="video/mp4" />
                                                        </video>
                                                    </div>
                                                </> :
                                                    <>
                                                        <div className="image">
                                                            <img src={value.image} alt="" />
                                                        </div>
                                                        <div className='text'>{value.text}</div>
                                                        <div className="pricing">{value.pricing}</div>
                                                    </>
                                            }

                                        </li>
                                    })
                                }

                            </ul>
                            <div className="prev" onClick={scrollToPrevPage}>
                                <FontAwesomeIcon icon={faLeftLong} />
                            </div>
                            <div className="next" onClick={scrollToNextPage}>
                                <FontAwesomeIcon icon={faRightLong} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;
