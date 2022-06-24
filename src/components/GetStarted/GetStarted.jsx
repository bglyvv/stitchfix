import React from 'react'
import { Link } from 'react-router-dom'
import './getstarted.css'


function GetStarted() {
    return (
        <div id="getStarted">
            <div className="content">
                <h2>Ready to get started with Stitch Fix?</h2>
                <Link to="/quiz">Take your style quiz</Link>
            </div>
        </div>
    )
}

export default GetStarted;