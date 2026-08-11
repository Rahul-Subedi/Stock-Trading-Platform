import React from 'react';

function Awards() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row align-items-center text-center text-md-start">
                
                {/* Left Column: Illustration */}
                <div className="col-md-6 mb-5 mb-md-0 px-md-5 text-center">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Largest broker illustration" 
                        className="img-fluid" 
                        style={{ maxWidth: '85%' }}
                    />
                </div>
                
                {/* Right Column: Text & Features */}
                <div className="col-md-6 px-md-4">
                    {/* Downsized from display-5 to h3 for a refined, professional look */}
                    <h2 className="h3 fw-bold text-dark mb-3">
                        Largest stockbroker in India
                    </h2>
                    
                    {/* Removed 'lead' class for standard, highly readable body text */}
                    <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                        With over 20 years of experience, we are the largest stockbroker in India.
                    </p>
                    
                    {/* Services Lists */}
                    <div className="row mb-5">
                        <div className="col-6">
                            {/* Removed 'fs-5' to keep font sizing normal and elegant */}
                            <ul className="list-unstyled text-muted">
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Futures and Options
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Equity
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Currency
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Commodity
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled text-muted">
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Futures and Options
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Equity
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Currency
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="text-primary me-2 fw-bold">•</span> Commodity
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Press Logos */}
                    <div className="mt-2">
                        <img 
                            src="media/images/pressLogos.png" 
                            alt="Featured in press" 
                            className="img-fluid opacity-75" 
                            style={{ maxWidth: '85%' }} 
                        />
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Awards;