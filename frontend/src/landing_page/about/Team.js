import React from 'react';

function Team() {
    return ( 
        <div className="container mt-5 pt-5 mb-5">
            
            {/* Section Header */}
            <div className="row mb-5 mt-4">
                <div className="col-12 text-center">
                    <h2 className="h3 fw-bold text-dark">Meet the Developer</h2>
                    <p className="text-muted" style={{ fontSize: '1.1rem' }}>
                        The mind behind our innovative banking solutions.
                    </p>
                </div>
            </div>

            {/* About Me Section */}
            <div className="row align-items-center justify-content-center">
                
                {/* Left Column: Profile Picture */}
                <div className="col-md-5 text-center mb-4 mb-md-0 pe-md-5">
                    <img 
                        // Replace this path with the actual path to your picture
                        src="media/images/rahul-profile.jpeg" 
                        alt="Rahul Subedi" 
                        className="img-fluid rounded-circle shadow-sm"
                        style={{ 
                            maxWidth: '280px', 
                            border: '6px solid #f8f9fa' // Creates a clean, framed look
                        }}
                    />
                </div>
                
                {/* Right Column: About Me Text */}
                <div className="col-md-7 ps-md-5 border-start border-2 border-primary">
                    <h3 className="h4 fw-bold text-dark mb-1">
                        Rahul Subedi
                    </h3>
                    <p className="text-primary fw-medium mb-3">
                        Full-Stack Developer
                    </p>
                    
                    <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Rahul is a Full-Stack Developer and Electrical Engineering undergraduate at NIT Durgapur. Specializing in the MERN stack, he is passionate about architecting secure, scalable, and user-centric platforms from the ground up.
                    </p>
                    <p className="text-muted mb-0" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Beyond building web applications, Rahul is a dedicated competitive programmer. He is a 3-Star Coder on CodeChef (Rating: 1617) and has conquered over 350 Data Structures and Algorithms challenges on LeetCode, ensuring the backend logic powering this platform is highly optimized and robust.
                    </p>
                </div>
                
            </div>
        </div>
     );
}

export default Team;