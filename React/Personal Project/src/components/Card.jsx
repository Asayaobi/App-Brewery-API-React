import React, { useState } from "react"

function Card(props) {
    // console.log('props',props)
    const [opacity, setOpacity] = useState({ opacity: 0.3 })

    function handleClick(event){
      // console.log('quote count', props.quotesCount)
      //prevent sending more than 3 favorite quotes
      if (props.quotesCount < 3){
      const id = event.target.name
      setOpacity({ opacity: 0.8 })
      props.addId(id)
      }
      
    }

    return (
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-warning">
          
          <div className="d-flex justify-content-end">
            <button className="icon-link icon-link-hover p-0 border-0 bg-transparent" onClick={handleClick}>
            <img 
                  src="https://openmoji.org/data/color/svg/1F49B.svg" 
                  height="50" 
                  width="50"
                  style={opacity}
                  name={props.id}
                />
              </button>
            </div>

            <div className="fs-3 py-3 px-3 px-lg-5">
              {props.text}
            </div>

            <div className="py-5 row row-cols-1 row-cols-lg-2 d-flex align-items-center px-3 px-lg-5">
              <div className="col-lg-5">
                <img
                  src={props.img}
                  className="rounded-circle bg-light"
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