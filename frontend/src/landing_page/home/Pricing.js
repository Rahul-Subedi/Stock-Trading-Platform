import React from 'react';

function Pricing() {
    return ( 
        <div className="container py-5 my-4">
            <div className="row align-items-center">
                
                {/* Left Column: Text & Call to Action */}
                <div className="col-md-5 mb-5 mb-md-0 px-md-4">
                    {/* Downsized from display-5 to a clean h3 */}
                    <h2 className="h3 fw-bold text-dark mb-3">
                        Unbeatable pricing
                    </h2>
                    
                    {/* Removed 'lead' class and improved line height for a corporate feel */}
                    <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                        Get the best prices on all your trades with our transparent pricing model.
                    </p>
                    
                    {/* Adjusted button to match the refined sizing of other components */}
                    <a href="#" className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                        Learn More
                    </a>
                </div>
                
                {/* Spacer to push the table to the right */}
                <div className="col-md-1"></div>
                
                {/* Right Column: Pricing Table */}
                <div className="col-md-6">
                    <div className="row text-center align-items-stretch">
                        
                        {/* ₹0 Pricing Block */}
                        <div className="col-6 p-4 border rounded-start bg-light">
                            {/* Downsized from display-4 to h1 to prevent it from looking cartoonish */}
                            <h3 className="h1 fw-bold text-primary mb-2">
                                ₹0
                            </h3>
                            {/* Added 'small' text class to perfectly balance the block */}
                            <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                                Commission on equity delivery trades
                            </p>
                        </div>
                        
                        {/* ₹20 Pricing Block */}
                        <div className="col-6 p-4 border border-start-0 rounded-end bg-light">
                            <h3 className="h1 fw-bold text-primary mb-2">
                                ₹20
                            </h3>
                            <p className="text-muted small mb-0" style={{ lineHeight: '1.5' }}>
                                Per order for intraday and F&O trades
                            </p>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Pricing;