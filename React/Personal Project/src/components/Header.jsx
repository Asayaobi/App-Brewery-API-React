import { useState } from "react"

function Header() {
  const [isDark, setDark] = useState(false)

  function toDark() {
    if (!isDark){
      setDark(true)
      // console.log('dark theme')
      document.querySelector("html").setAttribute("data-bs-theme","dark")
    } else {
      setDark(false)
      document.querySelector("html").removeAttribute("data-bs-theme")
      // console.log('light theme')
    }
  }

  return (
    <section>
      <div className="container-fluid px-lg-5">
        <header className="row d-flex justify-content-between my-2 px-5">
          <h4 className="col-md-12 col-lg-3 text-center d-flex align-items-center py-2">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#87ddd5"
              className="bi bi-emoji-smile-upside-down-fill me-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8" />
            </svg>
            Quirky Quotes
          </h4>

          <div className="col-md-12 col-lg-6 d-flex justify-content-lg-end row">
            <a href="#features" className="flex-grow-1 col-lg-3 mb-md-2">
              <button className="btn btn-dark btn-lg border-white w-100">Features</button>
            </a>
            <a href="#post" className="flex-grow-1 col-lg-3 mb-md-2">
              <button className="btn btn-dark btn-lg text-nowrap border-white w-100">Add Quote</button>
            </a>
            <a href="#visitors" className="flex-grow-1 col-lg-3 mb-md-2">
              <button className="btn btn-dark btn-lg border-white w-100">Visitors</button>
            </a>
            <a href="#" className="flex-grow-1 col-lg-3 mb-md-2">
              <button onClick={toDark} className="btn btn-dark btn-lg text-nowrap border-white w-100">
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </a>
          </div>
        </header>
      </div>
    </section>
  )
}

export default Header
