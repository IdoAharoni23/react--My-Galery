import React, { useState } from 'react'

export default function Main({picArr}) {
const [count, setCount] = useState(0)
    const nextPic = ()=>{
        if (count === 14) {
            setCount(0)
        }else{
            setCount(count+1)
        }
    }

    const backPic = ()=>{
        if (count === 0) {
            setCount(14)
        }else{
            setCount(count-1)
            
        }
    }
     

    return (
        <div className="galery">
            <div className="btnLeft" onClick={()=>{backPic()}}><span>Back</span></div>
            {picArr.length === 0? <div className="img"></div> : <div className="img" style={{  
  backgroundImage: "url(" + picArr.photos[count].src.large + ")",
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}}></div> }
            <div className="btnRight"  onClick={()=>{nextPic()}}><span>Next</span></div>
        </div>
    )
}

