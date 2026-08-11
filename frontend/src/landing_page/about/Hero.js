import React from 'react';

function Hero() {
    return ( 
        // Kept mt-5 pt-5 to prevent the fixed navbar from hiding the content
        <div className="container mt-5 pt-5 mb-5">
            <div className="row align-items-center mt-5">
                
                {/* Left Column: Main Impact Statement */}
                <div className="col-md-6 pe-md-5 mb-4 mb-md-0">
                    <h1 className="h2 fw-bold text-dark" style={{ lineHeight: '1.4' }}>
                        We pioneered the first digital bank in the country, and we continue to lead the way in innovation.
                    </h1>
                </div>
                
                {/* Right Column: Mission Statement */}
                <div className="col-md-6 ps-md-5 border-start border-2 border-primary">
                    <p className="text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Our mission is to provide accessible, secure, and convenient banking solutions for everyone. We are committed to redefining the customer experience through seamless financial technology.
                    </p>
                </div>
                
            </div>
        </div>
     );
}

export default Hero;