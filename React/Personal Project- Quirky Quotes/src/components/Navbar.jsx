import { useState } from "react"

function NavBar() {
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
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-5 mx-lg-5">
            <a className="navbar-brand" href="#">
                <div className="row align-items-center">
                    <div className="col">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="#87ddd5"
                        className="bi bi-emoji-smile-upside-down-fill"
                        viewBox="0 0 16 16"
                        >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5M4.285 6.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M10 8c-.552 0-1 .672-1 1.5s.448 1.5 1 1.5 1-.672 1-1.5S10.552 8 10 8" />
                    </svg>
                </div>
                <div className="col ps-0">
                    <div className="fs-4 fw-semibold">Quirky Quotes</div>
                </div>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#features">
                        <button className="btn btn-dark btn-lg border-white w-100">Features</button>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#post">
                    <button className="btn btn-dark btn-lg text-nowrap border-white w-100">Add Quote</button>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#visitors">
                    <button className="btn btn-dark btn-lg border-white w-100">Visitors</button>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <button onClick={toDark} className="btn btn-dark btn-lg text-nowrap border-white w-100">
                            {isDark ? "Light Mode" : "Dark Mode"}
                        </button>
                        </a>
                </li>
                </ul>
            </div>
            </div>
    </nav>
    </section>
  )
}

export default NavBar
