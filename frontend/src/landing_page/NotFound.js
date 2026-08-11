import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className="container py-5 my-5">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10 col-lg-7">
                    
                    {/* 404 Error Heading */}
                    <h1 className="h2 fw-bold text-dark mb-3">
                        404 - Page Not Found
                    </h1>
                    
                    {/* Error Description */}
                    <p className="text-muted mb-4 px-md-4" style={{ lineHeight: '1.7' }}>
                        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
                    </p>
                    
                    {/* Call to Action: Route back to Home */}
                    <Link to="/" className="btn btn-primary px-4 py-2 fw-medium rounded-pill shadow-sm">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>            
    );
}

export default NotFound;