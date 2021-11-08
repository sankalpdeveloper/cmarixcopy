import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
     
     <nav
  class="navbar navbar-expand-lg navbar-light bg-light"
>
  
  <div class="container-fluid">
   
    <button
      class="navbar-toggler px-0"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarExample1"
      aria-controls="navbarExample1"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>


    <div
      class="collapse navbar-collapse"
      id="navbarExample1"
    >
      
      <ul
        class="navbar-nav me-auto ps-lg-0"
        style={{paddingLeft: "0.15rem"}}
      >
        <li class="nav-item">
          <a class="nav-link" href="#">Regular link</a>
        </li>
        
        <li class="nav-item dropdown position-static">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Mega menu
          </a>
          
          <div
            class="dropdown-menu w-100 mt-0"
            aria-labelledby="navbarDropdown"
            style={{
              borderTopLeftRadius: "0",
              borderTopRightRadius: "0"
            }}
          >
            <div class="container">
              <div class="row my-4">
                <div
                  class="col-md-6 col-lg-3 mb-3 mb-lg-0"
                >
                  <div
                    class="list-group list-group-flush"
                  >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Lorem ipsum</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Dolor sit</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Amet consectetur</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Cras justo odio</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Adipisicing elit</a
                    >
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-3 mb-3 mb-lg-0"
                >
                  <div
                    class="list-group list-group-flush"
                  >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Explicabo voluptas</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Perspiciatis quo</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Cras justo odio</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Laudantium maiores</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Provident dolor</a
                    >
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-3 mb-3 mb-md-0"
                >
                  <div
                    class="list-group list-group-flush"
                  >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Iste quaerato</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Cras justo odio</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Est iure</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Praesentium</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Laboriosam</a
                    >
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div
                    class="list-group list-group-flush"
                  >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Cras justo odio</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Saepe</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Vel alias</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Sunt doloribus</a
                    >
                    <a
                      href=""
                      class="list-group-item list-group-item-action"
                      >Cum dolores</a
                    >
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
