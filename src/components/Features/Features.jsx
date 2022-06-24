import React from 'react'
import './features.css'
import shipping from '../../images/features/shipping.PNG'
import scissors from '../../images/features/scissors.PNG'
import expert from '../../images/features/expert.PNG'

function Features() {
    return (
        <div id="features">
            <div className="container">
                <h2>We make it easy to build your dream closet</h2>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="box">
                            <div className="image">
                                <img src={expert} alt="" />
                            </div>
                            <h3>Expert picks</h3>
                            <p>Get outfit and styling suggestions that meet your price preferences.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="box">
                            <div className="image">
                                <img src={shipping} alt="" />
                            </div>
                            <h3>Free shipping</h3>
                            <p>Easy returns and exchanges on all orders, pre-paid labels included.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="box">
                            <div className="image">
                                <img src={scissors} alt="" />
                            </div>
                            <h3>No commitment</h3>
                            <p>Shop when you want, how you want. No subscription required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
