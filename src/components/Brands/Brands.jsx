import React from 'react'
import './brands.css'

function Brands() {

    const brandImages = [
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/1_madewell.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/2_freepeople.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/3_underarmour.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/4_mother.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/5_goodamerican.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/6_vince.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/7_rails.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/8_aliceolivia.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/9_nike.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/10_Kate.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/Q3HowItWorks/logos/11_farmrio.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/12_calvinklein.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/13_samedelman.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/14_dkny.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/15_barbour.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/16_michaelkors.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/17_northface.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/18_adidas.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/19_clubmonaco.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/20_vans.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/21_sanctuary.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/22_beyondyoga.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/Q3HowItWorks/logos/23_11HONORE.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/24_vincecamuto.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/25_levis.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/26_vuori.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/27_girlfriend.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/28_reebok.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/29_marinelayer.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/GoToMarket/logos/30_paige.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/Q3HowItWorks/logos/31_eileenfisher.jpg",
        "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/US/women/Q3HowItWorks/logos/32_ALC.jpg"
    ]

    return (
        <div id="brands">
            <div className="header">
                <h2>Let us find your faves from 1000+ brands & styles</h2>
                <p>We carry women’s sizes XS–3X including <a href="/">Plus</a>, <a href="/">Petite</a> and <a href="/">Maternity</a></p>
            </div>
            <div className="brands-wrapper">
                <div className="brands-container">
                    {
                        brandImages.map((value, index) => {
                            return <div key={index} className="image">
                                <img src={value} alt="" />
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Brands;
