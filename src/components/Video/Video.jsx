import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import * as $ from 'jquery'
import MyVideo from '../../videos/video.mp4'
import './video.css'

function Video() {

    const [videoState, setVideoState] = useState(true);
    const toggleVideo = () => {
        if (videoState) {
            $('.video video').trigger('pause');
        }
        else {
            $('.video video').trigger('play');
        }
        setVideoState(!videoState);
    }

    return (
        <div id="video">
            <div className="container-fluid g-0">
                <div className="row g-0">
                    <div className="col-lg-6 col-12">
                        <div className="left-wrapper">
                            <div className="box">
                                <h3>Discovering styles you love just got easier</h3>
                                <Link to="/quiz">Take your style quiz</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="right-wrapper">
                            <div className="video">
                                <video src={MyVideo} poster="https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/video/upload/landing-pages/pages/US/women/Q3HowItWorks/videos/women-stitch-fix-video.jpg" controlsList="nofullscreen nodownload noremoteplayback noplaybackrate" muted loop playsInline autoPlay></video>
                                <div className="control-button" onClick={toggleVideo}>
                                    {videoState ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;