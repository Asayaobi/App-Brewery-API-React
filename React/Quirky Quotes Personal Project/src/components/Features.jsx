import React from "react"

function Features(props) {
  const data = props.quotes
  let favQuotes = data.filter(quote => {
    if (quote.feature){
      return quote
    } 
  })
  // console.log('feature:', favQuotes)
  return (
    <section id="features">
      <div className="container-fluid mt-5 py-5 bg-light px-lg-5">
        <div className="px-5 py-lg-5">
          <p className="display-4 fw-bold text-dark">Featured Quotes</p>

          <div className="row row-cols-md-1 row-cols-lg-2 row-cols-xl-3">
            <div className="card border border-0 bg-transparent">
              <img
                src="https://blog-frontend.envato.com/uploads/sites/2/2021/02/minimal-still-life-art-fashion-sport-shoes-concept-8YVWP2J.jpg"
                className="rounded"
                alt="pastel pink fashion image"
              />
              <div className="card-body text-dark">
                <h5 className="fs-3">{(favQuotes[0]?.name || "Will")}'s Quote</h5>
                <p className="fs-4 fw-lighter">
                  "{(favQuotes[0]?.quote || 
                    "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are."
                    )}"
                </p>
              </div>
            </div>
            <div className="card border border-0 bg-transparent">
              <img
                src="https://i.postimg.cc/ydyFXvZs/coco-Sq.png"
                className="rounded"
                alt="coconut with pastel background image"
              />
              <div className="card-body text-dark">
                <h5 className="fs-3">{(favQuotes[1]?.name || "Emma")}'s Quote</h5>
                <p className="fs-4 fw-lighter">
                  "
                {(favQuotes[1]?.quote || `When your mother asks, 'Do you want a piece of advice?'. It
                  doesn't matter if you answer yes or no. You're going to get it
                  anyway.`
                  )}
                  "
                </p>
              </div>
            </div>
            <div className="card border border-0 bg-transparent">
              <img
                src="https://i.postimg.cc/Cx8nsm3X/mint-sq.png"
                className="rounded"
                alt="bottle with mint background image"
              />
              <div className="card-body text-dark">
                <h5 className="fs-3">{(favQuotes[2]?.name || "Phil")}'s Quote</h5>
                <p className="fs-4 fw-lighter">
                  "
                  {(favQuotes[2]?.quote || 
                  "I want my children to have all the things I couldn't afford.Then I want to move in with them."
                  )} "
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
