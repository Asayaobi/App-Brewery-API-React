import React, { useState} from "react"
import Card from "./Card"

function Quotes(props) {
  //receive props from Apps
  const quotes = props.quotes

  //check how many feature quote is currently chosen
  let prevCount = quotes.reduce((acc, quote) => {
    if (quote.feature) {
      acc += 1
    }
    return acc
  }, 0)
  // console.log('prev count ', prevCount)
  const [count, setCount] = useState(prevCount)

  function favoriteQuote(id){
    // console.log('id from Card to Quotes Component:',id)

    //1. check if that id is already chosen
    const foundQuote = quotes.find(quote => quote.id == id && quote.feature)
    // console.log('found',foundQuote)

    //2. if yes, toggle the quote.feature property
    if (foundQuote) {
      setCount(count-1)
      props.getId(id)
      // console.log('count-')
    }

    //3. if the id is new & prevent sending more than 3 favorite quotes
     else if (count < 3){
      props.getId(id)
      setCount(count+1)
      // console.log('count+')
    } 
  }
 
  return (
    <section id="visitors">
    <div className="container-fluid px-5 py-5">
      <div className="px-lg-5 pt-5">
        <p className="display-4 fw-bold">Quotes from Visitors</p>
        <p className="mb-4 fs-2 fw-lighter py-4">
        Give a little love to your favorite quotes! Heart up to 3 and watch them sparkle on our Featured page!
          </p>
      </div>

      <div className="row row-cols-md-1 row-cols-lg-2 row-cols-xl-3 my-5 text-center px-lg-5">
        {quotes.map(quote => (
          <Card 
            key={quote.id}
            id={quote.id}
            feature={quote.feature}
            text={quote.quote}
            img={quote.profilepicture}
            name={quote.name}
            addId={favoriteQuote}
          />
        )
      )}
      </div>
    </div>
    </section>
  )
}

export default Quotes
