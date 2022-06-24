import React from 'react'
import Video from '../components/Video/Video';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Carousel from '../components/Carousel/Carousel';
import FAQ from '../components/FAQ/FAQ'
import GetStarted from '../components/GetStarted/GetStarted';
import Features from '../components/Features/Features';
import StyleShuffle from '../components/StyleShuffle/StyleShuffle'
import Testimonials from '../components/Testimonials/Testimonials';
import Brands from '../components/Brands/Brands';

function Home() {
    return (
        <div>
            <Video></Video>
            <HowItWorks></HowItWorks>
            <Carousel></Carousel>
            <Brands></Brands>
            <Testimonials></Testimonials>
            <StyleShuffle></StyleShuffle>
            <Features></Features>
            <GetStarted></GetStarted>
            <FAQ></FAQ>
        </div>
    )
}

export default Home;