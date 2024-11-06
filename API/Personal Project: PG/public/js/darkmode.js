function toDark() {
    if (document.querySelector("html").hasAttribute("data-bs-theme")){
      document.querySelector("html").removeAttribute("data-bs-theme")
      document.querySelector("#darkmode").innerHTML = "Dark Mode"
      document.querySelector("#darkmode").setAttribute("class","btn btn-dark btn-lg text-nowrap darkmode")
    } else {
      document.querySelector("html").setAttribute("data-bs-theme","dark")
      document.querySelector("#darkmode").innerHTML = "Light Mode"
      document.querySelector("#darkmode").setAttribute("class","btn btn-dark btn-lg text-nowrap darkmode")
    }
  }
  document.querySelector('#darkmode').addEventListener("click", toDark)
