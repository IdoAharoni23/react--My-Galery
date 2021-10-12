import React, { useState } from 'react'
import Form from './components/Form'
import Main from './components/Main'

export default function App() {

  const [input, setInput] = useState("")
  const [picArr, setPicArr] = useState([])
  const getPic = async (query)=>{
    try {
      const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`,{
        method : "GET",
        headers:{"content-type":"application/json",
                  'Accept': 'application/json',
                  'Authorization' : "563492ad6f91700001000001a7ea0ed112f748288cdae31eac850def"}
      })
      const data = await res.json()
      console.log(data);
      setPicArr(data)
      console.log(data.photos[4].src.large);
    } catch (error) {
      console.log(error);
    }

  }

  const searchHandler =async (input)=>{
    try {
      await getPic(input)

    } catch (error) {
      console.log(error);
    }
  }
  return (
    
    <div className="app">
      <div className="back"></div>
      <div className="app2">
      <h1>My Galery</h1>
        <div className="form">
        <Form input={input} setInput ={setInput} searchHandler={searchHandler}  ></Form>
        </div>
      </div>
      <div className="main">
        <Main picArr={picArr}></Main>
      </div>
      <h3>Ido Aharoni</h3>
    </div>
  )
}


