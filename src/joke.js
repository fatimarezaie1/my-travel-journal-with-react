import React from "react";
import './style.css'
export default function Joke(props){
    return(
        <div className="content flex">
            <img  src={props.img} className="img "/>
            <div>
                <div className="flex header">  
                    <img src={props.location} className="location" />
                    
                    {props.name}
                    <a href="http://www.google.com" className="link">{props.link}</a>
                </div>
                <div className="description">
                    <h1>{props.title}</h1>
                    <h3>{props.date}</h3>
                    <p>{props.descrption}</p>
                </div>
            </div>
            

        </div>
    )
}