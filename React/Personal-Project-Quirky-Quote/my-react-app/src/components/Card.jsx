import React from "react"

function Card(props) {
    // console.log('props',props)
    return (
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm py-5 px-3 px-lg-5 border-white">
            <div className="fs-3 py-3">
              {props.text}
            </div>

            <div className="py-5 row row-cols-1 row-cols-md-2 d-flex align-items-center">
              <div className="col-lg-5">
                <img
                  src={props.img}
                  className="rounded-circle"
                  height="100"
                />
              </div>
              <div className="fs-4 fw-light text-nowrap col-lg-7">{props.name}</div>

            </div>
          </div>
        </div>
      )
}

export default Card