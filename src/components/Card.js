import React from "react";
import star from "../images/star.png";


export default function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText="SOLD OUT";
    }else if(props.item.location === "Online"){
        badgeText="ON LINE"
    }
    return (        
            <div className="card">
                { badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={`../images/${props.item.coverImg}`} alt="experience" className="experience-img"/>
                <div className="star-div">
                    <img src={star} alt="star" className="star"/>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount})</span>
                    <span className="gray"> • {props.item.location}</span>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.item.price}</strong> / person</p>
            </div>
    )
}