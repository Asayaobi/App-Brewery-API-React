import React from "react"

function Hero() {
  return (
    <section id="hero">
      <div className="container-fluid mt-5 py-5 px-lg-5">
        <div className="px-5 py-5">
          <p className="display-2 fw-bold">Welcome to Quirky Quotes</p>
          <p className="mb-4 fs-2 fw-lighter py-4">
            Welcome to Quirky Quotes, where the words are wild, the wisdom is
            wacky, and every quote comes with a twist of fun! Pssst… some of
            these quotes may or may not be from my favorite books (okay, maybe I
            made a few of them up, but don't tell anyone 🤫) Whether you're here
            for a daily dose of inspiration, a dash of silliness, or just some
            good ol' creative chaos, you've found the right spot. Dive into our
            collection of quirky quotes, where the unexpected happens, and the
            words never take themselves too seriously. Let's make wisdom weird
            together!
          </p>
          <a href="#post">
            <button type="button" className="btn btn-dark btn-lg px-4 mb-5 fs-2">
              Share your Quote
            </button>
          </a>
          <img
            src="https://i.postimg.cc/c4ZzSbmM/mint-bg.png"
            className="img-fluid border rounded-3 shadow-lg my-5"
            alt="cactus with mint background"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
