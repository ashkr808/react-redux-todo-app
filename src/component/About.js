import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="container about-us">
            <h1>About</h1>
            <p>This is a simple to-do list app to demonstrate my React knowledge.</p>
            <Link to="/"><i className="fa fa-arrow-left"></i> Back to Home  </Link>
        </div>
    )
}
