import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <nav 
            className={`navbar navbar-expand-lg fixed-top ${
                isScrolled ? 'shadow-lg border-0' : 'bg-white border-bottom'
            }`}
            style={{ 
                height: '60px', 
                transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
                backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : '#ffffff',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none'
            }}
        >
            <div className="container">
                
                {/* Changed a tag to Link and href to "to" */}
                <Link 
                    className={`navbar-brand d-flex align-items-center fw-bold fs-3 ${
                        isScrolled ? 'text-white' : 'text-primary'
                    }`} 
                    to="/"
                    style={{ transition: 'color 0.4s ease' }}
                >
                    <img 
                        src="media/images/logo.svg" 
                        alt="Company Logo" 
                        width={isScrolled ? "75" : "100"} 
                        height="40" 
                        className="me-2"
                        style={{ 
                            transition: 'width 0.4s ease, filter 0.4s ease',
                            filter: isScrolled ? 'drop-shadow(0px 0px 8px rgba(255,255,255,0.3))' : 'none',
                            objectFit: 'contain'
                        }}
                    />
                </Link>
                
                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent" 
                    aria-controls="navbarContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className={`navbar-toggler-icon ${isScrolled ? 'bg-light rounded opacity-75' : ''}`}></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {['About', 'Pricing', 'Product', 'Support'].map((item) => (
                            <li className="nav-item me-4" key={item}>
                                {/* Changed a tag to Link and updated href mapping to route paths */}
                                <Link 
                                    className={`nav-link fw-medium ${
                                        isScrolled ? 'text-light' : 'text-dark'
                                    }`} 
                                    to={`/${item.toLowerCase()}`}
                                    style={{ transition: 'color 0.4s ease' }}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Direct link to your dashboard application */}
                        <li className="nav-item me-4">
                            <a 
                                className={`nav-link fw-medium ${
                                    isScrolled ? 'text-light' : 'text-dark'
                                }`} 
                                href="http://localhost:3001" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ transition: 'color 0.4s ease' }}
                            >
                                Dashboard
                            </a>
                        </li>
                        
                        <li className="nav-item mt-3 mt-lg-0">
                            {/* Changed a tag to Link and href to "to" */}
                            <Link 
                                className={`btn px-4 py-2 fw-semibold rounded-pill shadow-sm ${
                                    isScrolled ? 'btn-light text-primary' : 'btn-primary'
                                }`} 
                                to="/signup"
                                style={{ transition: 'background-color 0.4s ease, color 0.4s ease' }}
                            >
                                Signup
                            </Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;