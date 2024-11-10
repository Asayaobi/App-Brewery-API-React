import React, { useState, useEffect } from "react"

function Post(props) {
  //defaut quote data from App.jsx
  // console.log('props from Post',props.quotes)
  let quotesData = props.quotes

  const [name, setName] = useState('')
  const [picture, setPicture] = useState('')
  const [text, setText] = useState('')
  const [allQuotes, setAllQuotes] = useState(quotesData)

  function handleInput(event){
    if (event.target.name === 'name'){
      const nameValue = event.target.value
      setName(nameValue)
    }
    if (event.target.name === 'profilepicture'){
      const picValue = event.target.value
      setPicture(picValue)
    }
    if (event.target.name === 'quote'){
      const textValue = event.target.value
      setText(textValue)    
    }
  }

    function handleSubmit(event){
      event.preventDefault()

      //add random picture to empty picture input
      const pictures = ["https://openmoji.org/data/color/svg/1F49C.svg", "https://openmoji.org/data/color/svg/1F335.svg", "https://openmoji.org/data/color/svg/1F421.svg", "https://openmoji.org/data/color/svg/1F438.svg","https://openmoji.org/data/color/svg/1F9A5.svg"]
      const random = Math.floor(Math.random() * pictures.length)

      //add new quote
      setAllQuotes([...allQuotes, {
        id: allQuotes.length + 1, 
        name: name,
        profilepicture: picture ? picture : pictures[random],
        quote: text
  }])

      //reset the value in the form
      setName('')
      setPicture('')
      setText('')
    }

        // This logs the updated value whenever it changes.
        // useEffect(() => {
        //   console.log('Updated name:', name)
        // }, [name])
        // useEffect(() => {
        //   console.log('Updated pic:', picture)
        // }, [picture])
        // useEffect(() => {
        //   console.log('Updated text:', text)
        // }, [text])
        useEffect(() => {
          // console.log('Updated allquotes:', allQuotes)
          //send back the update quotes to App.jsx
          props.updateData(allQuotes)
        }, [allQuotes])

  return (
    <section id="post">
      <div className="container-fluid my-5 ps-lg-5 py-lg-5">
        <div className="row d-flex justify-content-md-between">
          <div className="col-lg-6 px-5">
            <div className="d-flex flex-column gap-3">
              <div>
                <p className="display-4 fw-bold">Add your Quirky Quote</p>
              </div>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                  <label htmlFor="name" className="fs-3 mb-2">
                    Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      onChange={handleInput}
                      type="text"
                      value={name}//  to clear the input on reset
                      className="form-control fs-4 fw-lighter"
                      name="name"
                      placeholder="Bieber Babe"
                      required
                      maxLength="100"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="profilepicture" className="fs-3 mb-2">
                    Profile Picture
                  </label>
                  <div className="col-sm-12">
                    <input
                      onChange={handleInput}
                      value={picture}//  to clear the input on reset
                      type="text"
                      className="form-control fs-4 fw-lighter"
                      name="profilepicture"
                      placeholder="https://shorturl.at/Sur9N"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="quote" className="fs-3 mb-2">
                    Quirky Quote
                  </label>
                  <div className="col-sm-12">
                    <textarea
                      onChange={handleInput}
                      value={text}//  to clear the input on reset
                      className="form-control fs-4 fw-lighter mb-2"
                      name="quote"
                      rows="4"
                      placeholder="I followed my heart… and it led me to the beach bar."
                      maxLength="800"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 py-3">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg px-4 me-md-2 fs-2 border-white"
                  >
                    Post your Quirky Quote
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-md-end p-0">
            <div>
              <img
                className="img-fluid rounded-start "
                src="https://i.postimg.cc/BnWb3vBk/pineapplemelon.jpg"
                alt="fruit with pastel background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Post
