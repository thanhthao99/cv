import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends Component {
    render() {
        return (
            <>
                <nav style={{ backgroundColor: '#2AE0E3' }}>
                    <div className="container">
                    <div class="nav-wrapper">
                        <Link to='/' className='brand-logo' style={{color: 'black'}}>CV</Link>
                        <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/' >
                                    <i className="fas fa-home" ></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/educations">
                                    <i className="fas fa-graduation-cap"></i>Educations
                                </Link>
                            </li>
                            <li>
                                <a href='https://www.topcv.vn/xem-cv/326ff1eaa50e5ffc60ca0b26dfdc08ac' target="blank">
                                    <i className="fas fa-download"></i> Download
                            </a>
                            </li>
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>
                                    <i className="fas fa-id-badge"></i> Experiences
                            </Link>
                            </li>
                            <li>
                                <Link to='/educations'>
                                    <i className="fas fa-graduation-cap"></i> Educations
                            </Link>
                            </li>
                            <li>
                                <a href='https://www.topcv.vn/xem-cv/326ff1eaa50e5ffc60ca0b26dfdc08ac' target="blank">
                                    <i className="fas fa-download"></i> Download
                                </a>
                            </li>
                        </ul>
                    </div>

                    </div>
                </nav>
            </>
        )
    }
}
