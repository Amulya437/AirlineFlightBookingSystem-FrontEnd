import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./auth/login";
export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
    }
    componentDidMount() {
        let username = localStorage.getItem('username');

        if (username === null || username === undefined)
            this.setState({ isLoggedIn: false })
        else
            this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <div >
                <div className="navbar">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                FlightApp
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/airline">
                                            Airline
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/flight">
                                            Flight
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/flyer">
                                            Flyer
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/executive">
                                            Executive
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/sign-up">
                                            <button type="button" className="btn btn-primary">SignUp</button>
                                        </Link>
                                    </li>

                                </ul>
                                <div className="col-sm-2">
                                    {this.state.isLoggedIn ? <Link to="/logout"><button className="btn btn-outline-danger">
                                        Logout </button>  </Link> : ''
                                    }


                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="containerFluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}