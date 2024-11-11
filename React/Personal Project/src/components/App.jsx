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
  const [favQuotes, setFavQuotes] = useState([])

  // update data from Post
  function postQuote(updateQuotes){
    console.log('App: quotes update from post', updateQuotes)
    setData(updateQuotes)
  }

  //pin favorite quotes for Features page
  //get the ids when the user mark it in Quotes page
  function getFavQuote(quote) {
    console.log('quote id in App', quote)

    if (favQuotes.length === 0) {
      setFavQuotes([quote])
    } else {
      setFavQuotes((prevId) => [...prevId,quote])
    }

  }
  
  return (
    <div>
        <Header />
        <Hero />
        <Features favQuotes={favQuotes}/>
        <Post quotes={data} updateData={postQuote}/>
        <Quotes quotes={data} getQuote={getFavQuote}/>
        <Footer />
    </div>
  )
}

export default App
