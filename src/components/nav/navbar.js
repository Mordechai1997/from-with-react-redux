import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    const [event, setEvent] = useState('Form');




    const changeTab = (e) => {
        setEvent(e.target.attributes.name.nodeValue)
    }

    return (
        <div>
            <nav>

                <ul className="navbar-nav flex-grow">
                    <Link to="/">
                        <li
                            name='Form'
                            className={`${event === 'Form' ? 'action' : ''}`}
                            onClick={changeTab} >
                            FORM
                        </li>
                    </Link>
                    <Link to="/users">
                        <li
                            name='users'
                            className={`${event === 'users' ? 'action' : ''}`}
                            onClick={changeTab}>
                            USER
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
