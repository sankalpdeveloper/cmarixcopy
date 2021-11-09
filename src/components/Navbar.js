import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className="container">

      <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Cmarix Technolabs <span className="badge bg-primary"></span></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content">
            <div className="hamburger-toggle">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbar-content">
            <ul className="mb-2 mr-auto navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item dropdown dropdown-mega position-static">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Megamenu_1</a>
                <div className="shadow dropdown-menu">
                  <div className="px-4 mega-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>Title</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="#">Mega Menu Link143</a>
                            <a className="list-group-item" href="#">Mega Menu Link212</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                            <a className="list-group-item" href="#">Mega Menu Link312</a>
                          </div>
                        </div>
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>title</h5>
                          <div className="card">
                            <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/396690.png" className="img-fluid" alt="image" />
                            <div className="card-body">
                              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, alias? Voluptas hic impedit nulla autem ipsa quis nobis sed, eligendi atque sequi expedita esse exercitationem harum reiciendis repudiandae, aliquam laudantium.</p>
                            </div>
                          </div>
                        </div>
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>Title</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum reprehenderit ratione sit minima harum quibusdam, aliquam, qui aut ipsum sint molestias. Doloribus alias eum harum dolores deserunt dicta explicabo praesentium!</p>
                        </div>
                        <div className="py-4 col-12 col-sm-12 col-md-3">
                          <h5>Title</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-mega position-static">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Megamenu_2</a>
                <div className="shadow dropdown-menu">
                  <div className="px-4 mega-content">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>Title</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="#">Mega Menu Link</a>
                            <a className="list-group-item" href="#">Mega Menu Link</a>
                            <a className="list-group-item" href="#">Mega Menu Link</a>
                          </div>
                        </div>
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>Card Title</h5>
                          <div className="card">
                            <img src="https://fileupload1999.s3.ap-south-1.amazonaws.com/396690.png" className="img-fluid" alt="image" />
                            <div className="card-body">
                              <p className="card-text">Description goes here...</p>
                            </div>
                          </div>
                        </div>
                        <div className="py-4 col-12 col-sm-4 col-md-3">
                          <h5>Title</h5>
                          <p>Description goes here...</p>
                        </div>
                        <div className="py-4 col-12 col-sm-12 col-md-3">
                          <h5>Title</h5>
                          <div className="list-group">
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                            <a className="list-group-item" href="#">Menu Link</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>

          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
