import React from "react"

function Quotes() {
  return (
    <div className="container-fluid px-5 py-5">
      <div className="px-lg-5 pt-5">
        <p className="display-4 fw-bold">Quotes from Visitors</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 my-5 text-center px-lg-5">
        {/* card1 */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm py-5 px-3 px-lg-5">
            <div className="fs-3 py-3">
              "Every day is a fresh start. But just to be clear, I’m going back
              to bed after this one."
            </div>
            <div className="py-5 text-start">
              <span className="px-4">
                <img
                  src="https://i.postimg.cc/kMsMQh0z/randomuser1.png"
                  className="rounded-circle"
                  height="100"
                />
              </span>
              <span>Amanda E.</span>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm py-5 px-3 px-lg-5">
            <div className="fs-3 py-3">
              "The first 5 days after the weekend are always the hardest."
            </div>
            <div className="py-5 text-start">
              <span className="px-4">
                <img
                  src="https://i.postimg.cc/QtbDqHy1/randomuser2.png"
                  className="rounded-circle"
                  height="100"
                />
              </span>
              <span>Emily C.</span>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm py-5 px-3 px-lg-5">
            <div className="fs-3 py-3">
              "I could definitely be a morning person… if morning started at
              noon."
            </div>
            <div className="py-5 text-start">
              <span className="px-4">
                <img
                  src="https://i.postimg.cc/3wQH5XM2/randomuser3.png"
                  className="rounded-circle"
                  height="100"
                />
              </span>
              <span>Jake J.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotes
