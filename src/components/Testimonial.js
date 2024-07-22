import React, { useState } from 'react'

import Card from './Card';

function Testimonial (props)  {
    const data=props.data;
    const[count,setCount]=useState(0);

    function changeUpHandler(){

        if(count===data.length-1)
        {
            setCount(0);
        }
        else{
            setCount(count+1);
        }
    }
    function changeDownHandler(){
        if(count===0)
        {
            setCount(data.length-1);
        }
        else{
            setCount(count-1);
        }
    }
    function randomHandler (){
        setCount(Math.floor(Math.random()*data.length));
    } 
    
  return (
    <div>
        <Card index={count} up={changeUpHandler} down={changeDownHandler} rand={randomHandler} d={data}/>
    </div>
  )
}

export default Testimonial;