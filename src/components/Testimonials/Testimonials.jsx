import React from 'react'
import stylist from '../../images/helpers/stylist-desktop.jpg'
import './testimonials.css'

function Testimonials() {

    const testimonials = [
        {
            quote: "By collaborating to blend her unique taste, fit and body type, I helped Sara find the perfect jeans to flatter her petite frame!",
            name: "Christina",
            occupation: "stylist"
        },
        {
            quote: "Taylor started a new job. I sent her comfortable, easy-to-wash pieces that’d work for the office, family time and everything in-between.",
            name: "Lizzy",
            occupation: "stylist"
        },
        {
            quote: "Steph’s style is very edgy. I focus on looks she can easily transition from day to night, sprinkling in bold accessories for an extra pop.",
            name: "Nicole",
            occupation: "stylist"
        }
    ]

    return (
        <div id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={stylist} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="text">
                            <h2>Real people who really get your style</h2>
                            <p>Your stylist can help complete a look, collaborate on trends, recommend pieces that fit your unique body and incorporate your input into each item they send.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <ul>
                            {
                                testimonials.map((value, index) => {
                                    return <li key={index}>
                                        <div className="box">
                                            <p className="quote">
                                                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" color="#81E6D3" role="img">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 0C8.059 0 0 8.059 0 18v22h18V22h-8v-6a8 8 0 018-8V0zm22 0c-9.941 0-18 8.059-18 18v22h18V22h-8v-6a8 8 0 018-8V0z" fill="currentColor"></path>
                                                </svg>
                                                {value.quote}
                                            </p>
                                            <p className="citation">
                                                -<span className='name'>{value.name}</span>, <span>{value.occupation}</span>
                                            </p>
                                        </div>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
