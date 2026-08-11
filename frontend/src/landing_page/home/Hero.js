import React from 'react';

function Hero() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row justify-content-center text-center">
                
                {/* Hero Image - Full width column to safely achieve the "bleed" effect */}
                <div className="col-12 mb-5">
                    <img 
                        src="media/images/homeHero.png" 
                        alt="Home Hero" 
                        className="img-fluid rounded"
                        // Safe max-width ensures it stays within the screen on mobile
                        style={{ maxWidth: '95%' }} 
                    />
                </div>
                
                {/* Text & CTA - Constrained column for optimal reading width */}
                <div className="col-12 col-md-10 col-lg-7">
                    
                    {/* Downsized from display-4 to a clean, authoritative h1 */}
                    <h1 className="h2 fw-bold text-dark mb-3">
                        Invest in everything
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