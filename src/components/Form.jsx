import React from 'react'

export default function Form({input, setInput, searchHandler}) {
    return (
        <div className="formMain">
            <div className="divBtn">
            <button className="food"  onClick={()=>{searchHandler("food")}}>Food</button>
            <button className="nature" onClick={()=>{searchHandler("nature")}}>Nature</button>
            <button className="books" onClick={()=>{searchHandler("books")}}>Books</button>
            </div>
            <div className="inputDiv">
                <input type="text" placeholder="search pics by category" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <button className="btnSearch" onClick={()=>{searchHandler(input)
                                        setInput("")
                        }}>Search</button>
            </div>
        </div>
    )
}
