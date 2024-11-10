import React, {useState} from "react"
import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Post from "./Post"
import Quotes from "./Quotes"
import Footer from "./Footer"
import quotes from "../quotes"


function App() {
  // console.log('original data from js file',quotes)
  const [data, setData] = useState(quotes)
  const [favIds, setFavIds] = useState([])

  // update data from Post
  function postQuote(updateQuotes){
    console.log('App: quotes update from post', updateQuotes)
    setData(updateQuotes)
  }

  //pin favorite quotes for Features page
  //get the ids when the user mark it in Quotes page
  function getIds(QuoteId) {
    console.log('quote id in App', QuoteId)

    if (favIds.length === 0) {
      setFavIds([QuoteId])
    } else {
      setFavIds((prevId) => [...prevId,QuoteId])
    }

  }
  
  return (
    <div>
      <h1>{favIds}</h1>
        <Header />
        <Hero />
        <Features/>
        <Post quotes={data} updateData={postQuote}/>
        <Quotes quotes={data} getIds={getIds}/>
        <Footer />
    </div>
  )
}

export default App
