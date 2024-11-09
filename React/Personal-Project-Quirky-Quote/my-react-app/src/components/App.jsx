import React, {useState} from "react"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Post from "./Post"
import Quotes from "./Quotes"
import Footer from "./Footer"
import quotes from "../quotes"


function App() {
  console.log('original data from js file',quotes)
  const [data, setData] = useState(quotes)

  function postQuote(updateQuotes){
    console.log('quotes update from post', updateQuotes)
    setData(updateQuotes)
  }

  return (
    <div>
        <Header />
        <Hero />
        <Features />
        <Post quotes={data} updateData={postQuote}/>
        <Quotes quotes={data}/>
        <Footer />
    </div>
  )
}

export default App
