import React from 'react'
import {NavDropdown,Dropdown,Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeroNavbar() {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="flex-row nav-item d-flex">
                    <div className="mt-2">
                        <i class="fas fa-flag-usa"></i>
                    </div><div>
                        <a className="nav-link active" aria-current="page" href="#">+1 631-206-6051</a>
                    </div>
                </li>
                <li className="flex-row nav-item d-flex">
                    <div className="mt-2">
                        <i class="fas fa-flag-checkered"></i>
                    </div><div>
                        <a className="nav-link active" aria-current="page" href="#">+91 9549736263</a>
                    </div>
                </li>
                <li className="flex-row nav-item d-flex">
                    <div className="mt-2">
                        <i class="far fa-envelope"></i>
                    </div><div>
                        <a className="nav-link active" aria-current="page" href="#">biz@cmarix.com</a>
                    </div>
                </li>
                <li className="flex-row nav-item d-flex">
                    <div className="mt-2">
                        <i class="fab fa-skype"></i>
                    </div><div>
                        <a className="nav-link active" aria-current="page" href="#">Bizcmarix</a>
                    </div>
                </li>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-underline " aria-current="page" href="#">PARTERNERSHIP</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-underline" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-underline" href="#">GET IN TOUCH</a>
                    </li>
                    
                </ul>
            </ul>




           
        </div>
        
    )
}

export default HeroNavbar
