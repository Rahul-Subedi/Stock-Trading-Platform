import React from 'react';

function Education() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row align-items-center text-center text-md-start">
                
                {/* Left Column: Illustration */}
                <div className="col-md-6 mb-5 mb-md-0 text-center">
                    <img 
                        src="media/images/education.svg" 
                        alt="Educational resources" 
                        className="img-fluid" 
                        style={{ maxWidth: '85%' }}
                    />
                </div>
                  
                {/* Right Column: Content */}
                <div className="col-md-6 px-md-5">
                    {/* Downsized from display-5 to a clean, authoritative h3 */}
                    <h2 className="h3 fw-bold text-dark mb-4">
                        Education
                    </h2>
                    
                    {/* Education Block 1 */}
                    <div className="mb-5">
                        {/* Removed the 'lead' class and improved line height for a refined look */}
                        <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                            Learn more about investing and trading with our comprehensive educational resources.
                        </p>
                        {/* Standardized button sizing and font weight */}
                        <a href="#" className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                            Learn More
                        </a>
                    </div>

                    {/* Education Block 2 */}
                    <div>
                        <p className="text-muted mb-3" style={{ lineHeight: '1.7' }}>
                            Learn more about investing and trading with our comprehensive educational resources.
                        </p>
                        <a href="#" className="btn btn-outline-primary px-4 py-2 fw-medium rounded-pill">
                            Learn More
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Education;