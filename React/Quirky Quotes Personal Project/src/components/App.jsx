import React, {useState} from "react"
import Hero from "./Hero"
import Features from "./Features"
import Post from "./Post"
import Quotes from "./Quotes"
import Footer from "./Footer"
import quotes from "../quotes"
import NavBar from "./NavBar"


function App() {
  // console.log('original data from js file',quotes)
  const [data, setData] = useState(quotes)

  // update data from Post
  function postQuote(updateQuotes){
    // console.log('App: quotes update from post', updateQuotes)
    setData(updateQuotes)
  }

  function getId(id){
    //get id (a string) from Quote
    // console.log('App id:',id, typeof id)

    // Toggle feature property
    let updateData = data.map(quote => {
      if (quote.id == id) {
        return { ...quote, feature: !quote.feature }
      }
      return quote
    })

    setData(updateData)
  }

  return (
    <div>
        <NavBar />
        <Hero />
        <Features quotes={data}/>
        <Post quotes={data} updateData={postQuote}/>
        <Quotes quotes={data} getId={getId}/>
        <Footer />
    </div>
  )
}

export default App
