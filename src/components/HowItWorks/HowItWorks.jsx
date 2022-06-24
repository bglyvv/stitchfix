import React from 'react'
import { ReactComponent as Preferences } from '../../images/howItWorks/preferences.svg';
import { ReactComponent as Selections } from '../../images/howItWorks/selections.svg';
import { ReactComponent as Shops } from '../../images/howItWorks/shops.svg';
import './howitworks.css'

function HowItWorks() {
    return (
        <div id="howItWorks">
            <div className="container">
                <h1>How Stitch Fix works</h1>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="box">
                            <div className="image">
                                <Preferences />
                            </div>
                            <h3>Tell us about your style</h3>
                            <p>Take a quick and easy style quiz to help us learn what you love.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="box">
                            <div className="image">
                                <Selections />
                            </div>
                            <h3>Get pieces picked just for you</h3>
                            <p>Collaborate with your stylist to receive pieces that reflect your style, fit and price point.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="box">
                            <div className="image">
                                <Shops />
                            </div>
                            <h3>Shop on your own in your personalized store</h3>
                            <p>Discover new items and outfit suggestions every day.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
