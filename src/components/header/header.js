import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div className="header"> {/* Corrected className */}
            <h3 className="header-title"> {/* Corrected className */}
                <Link to='/'>
                    Game of Thrones DB
                </Link>
            </h3>
            <ul className="header-list"> {/* Corrected className */}
                <li>
                    <Link to='/characters/'> {/* Fixed typo in the route */}
                        Character
                    </Link>
                </li>
                <li>
                    <Link to="/houses/">
                        Houses
                    </Link>
                </li>
                <li>
                    <Link to="/books/">
                        Books
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
