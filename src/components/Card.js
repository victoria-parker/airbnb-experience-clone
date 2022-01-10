import React from "react";
import star from "../images/star.png"

export default function Card(props){
    let badgeText;
    if(props.openSpots === 0){
        badgeText="SOLD OUT";
    }else if(props.location === "Online"){
        badgeText="ON LINE"
    }
    return (        
            <div className="card">
                { badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`../images/${props.img}`} alt="experience" className="experience-img"/>
                <div className="star-div">
                    <img src={star} alt="star" className="star"/>
                    <span>{props.rating}</span>
                    <span className="gray">({props.reviewCount})</span>
                    <span className="gray"> • {props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price}</strong> / person</p>
            </div>
    )
}