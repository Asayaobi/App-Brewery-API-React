import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Post from "./Post"
import Footer from "./Footer"
import quotes from "../quotes"


function App() {
  let data = quotes
  console.log('data',data)

  function postQuote(updateQuotes){
    console.log('quotes update from post', updateQuotes)
    data = updateQuotes
    console.log('new data', data)
  }

  return (
    <div>
        <Header />
        <Hero />
        <Features />
        <Post quotes={data} updateData={postQuote}/>
        <Footer />
    </div>
  )
}

export default App
