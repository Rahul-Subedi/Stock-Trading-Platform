import React from 'react';

function Stats() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row align-items-center">
                
                {/* Left Column: Text & Features */}
                <div className="col-lg-6 text-start mb-5 mb-lg-0 px-md-4">
                    {/* Downsized from display-4 to a crisp, professional h3 */}
                    <h2 className="h3 fw-bold text-dark mb-5">
                        Our Ecosystem
                    </h2>
                    
                    {/* Feature 1 */}
                    <div className="mb-4">
                        <h3 className="h6 fw-bold text-dark">
                            Connecting traders with opportunities
                        </h3>
                        {/* Removed 'fs-5' and applied standard text with better line-height */}
                        <p className="text-muted" style={{ lineHeight: '1.7' }}>
                            We provide a comprehensive platform that connects traders with a wide range of opportunities in the financial markets.
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="mb-4">
                        <h3 className="h6 fw-bold text-dark">
                            Connecting traders with opportunities
                        </h3>
                        <p className="text-muted" style={{ lineHeight: '1.7' }}>
                            We provide a comprehensive platform that connects traders with a wide range of opportunities in the financial markets.
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="mb-4">
                        <h3 className="h6 fw-bold text-dark">
                            Connecting traders with opportunities
                        </h3>
                        <p className="text-muted" style={{ lineHeight: '1.7' }}>
                            We provide a comprehensive platform that connects traders with a wide range of opportunities in the financial markets.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image & Buttons */}
                <div className="col-lg-6 text-center">
                    <img 
                        src="media/images/ecosystem.png" 
                        alt="Ecosystem overview" 
                        // Removed heavy shadow for a flatter, more modern look
                        className="img-fluid mb-5" 
                        style={{ maxWidth: '85%' }} 
                    />
                    
                    {/* Call to Action Buttons */}
                    <div className="d-flex justify-content-center gap-3">
                        <a href="#" className="btn btn-outline-primary px-4 py-2 fw-medium rounded-pill">
                            Learn More
                        </a>
                        <a href="#" className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                            Get Started
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Stats;