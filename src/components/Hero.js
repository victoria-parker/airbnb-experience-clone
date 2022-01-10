import React from "react"
import heroGrid from "../images/photo-grid.png"

export default function Hero(){
    return (
        <div className="hero">
            <img src={heroGrid} alt="hero grid"/>
            <div className="text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}