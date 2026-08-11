import React from 'react';

function Hero() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row justify-content-center text-center">
                {/* Narrowed the column slightly (col-lg-7) for better text wrapping */}
                <div className="col-12 col-md-10 col-lg-7">
                    
                    {/* Downsized from display-4 to a clean, authoritative h2 */}
                    <h1 className="h2 fw-bold text-dark mb-3">
                        Open Your Zerodha Account Today
                    </h1>
                    
                    {/* Removed 'lead' class and improved line height for a refined look */}
                    <p className="text-muted mb-4 px-md-4" style={{ lineHeight: '1.7' }}>
                        Discover the power of investing with our platform.
                    </p>
                    
                    {/* Standardized button sizing, padding, and font weight */}
                    <button className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                        Signup
                    </button>
                </div>
            </div>
        </div>            
    );
}

export default Hero;