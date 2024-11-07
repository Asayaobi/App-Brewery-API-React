import React from "react"

function Post() {
  return (
    <section id="post">
      <div className="container-fluid my-5 ps-lg-5 py-lg-5">
        <div className="row d-flex justify-content-md-between">
          <div className="col-lg-6 px-5">
            <div className="d-flex flex-column gap-3">
              <div>
                <p className="display-4 fw-bold">Add your Quirky Quote</p>
              </div>
              <form action="/addquote" method="POST" className="mb-4">
                <div className="mb-3">
                  <label htmlFor="name" className="fs-3 mb-2">
                    Name
                  </label>
                  <div className="col-sm-12">
                    <input
                      type="text"
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
                    className="btn btn-dark btn-lg px-4 me-md-2 fs-2"
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
