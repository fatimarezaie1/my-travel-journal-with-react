import React from "react";
import Joke from './joke'
import jokeData from "./jokeData";
import Navbar from "./navbar";

export default function App(){
    const jokeElement = jokeData.map(joke =>{
        return <Joke img={joke.img} location={joke.location} name={joke.name} link={joke.link} title={joke.title} date ={joke.date} descrption ={joke.descrption}/>
    })
    
    return(
           
           <div>
             <Navbar />
             {jokeElement}
            </div> 
        
    )
}