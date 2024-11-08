import React from "react"
import Card from "./Card"

function Quotes(props) {
  // console.log('props all quotes', props)
  const quotes = props.quotes
  return (
    <section id="visitors">
    <div className="container-fluid px-5 py-5">
      <div className="px-lg-5 pt-5">
        <p className="display-4 fw-bold">Quotes from Visitors</p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-5 text-center px-lg-5">
        {quotes.map(quote => (
          <Card 
            key={quote.id}
            text={quote.quote}
            img={quote.profilepicture}
            name={quote.name}
          />
        )
      )}
      </div>
    </div>
    </section>
  )
}

export default Quotes
