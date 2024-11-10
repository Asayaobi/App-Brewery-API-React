import React from "react"
import Card from "./Card"

function Quotes(props) {
  const quotes = props.quotes

  function favoriteQuote(id){
    //from Card
    // console.log('id from Card to Quotes Component:',id)

    //sent to App component
    props.getIds(id)
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

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5 text-center px-lg-5">
        {quotes.map(quote => (
          <Card 
            key={quote.id}
            id={quote.id}
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
