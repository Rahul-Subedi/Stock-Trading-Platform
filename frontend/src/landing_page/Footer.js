import React from 'react';

function Footer() {
    return ( 
        <footer className="bg-light border-top py-5">
            <div className="container mt-4">
                
                {/* Top Section: Links and Brand */}
                <div className="row">
                    
                    {/* Column 1: Brand, Copyright, and Socials */}
                    <div className="col-lg-4 col-md-12 mb-5">
                        <img 
                            src="media/images/logo.svg" 
                            alt="Company Logo" 
                            width="140" 
                            className="mb-4"
                        />
                        <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                            © 2010 - 2026, Zerodha Broking Ltd.<br />
                            All rights reserved.
                        </p>
                        
                        {/* Social Icons (Top Row) */}
                        <div className="d-flex gap-3 mb-3 text-muted fs-5">
                            <i className="bi bi-twitter-x cursor-pointer">X</i> {/* Replace with actual icons/SVGs */}
                            <i className="bi bi-facebook cursor-pointer">f</i>
                            <i className="bi bi-instagram cursor-pointer">in</i>
                            <i className="bi bi-linkedin cursor-pointer">li</i>
                        </div>
                        
                        {/* Social Icons (Bottom Row) */}
                        <div className="d-flex gap-3 mb-4 text-muted fs-5 border-bottom pb-4 w-75">
                            <i className="bi bi-youtube cursor-pointer">yt</i>
                            <i className="bi bi-whatsapp cursor-pointer">wa</i>
                            <i className="bi bi-telegram cursor-pointer">tg</i>
                        </div>
                        
                        {/* App Store Badges */}
                        <div className="d-flex gap-2">
                            <img src="media/images/googlePlayBadge.svg" alt="Get it on Google Play" height="40" />
                            <img src="media/images/appStoreBadge.svg" alt="Download on the App Store" height="40" />
                        </div>
                    </div>

                    {/* Column 2: Account Links */}
                    <div className="col-lg-2 col-md-3 col-6 mb-4">
                        <h5 className="fw-medium text-dark mb-4">Account</h5>
                        <ul className="list-unstyled" style={{ lineHeight: '2.2' }}>
                            <li><a href="#" className="text-muted text-decoration-none">Open demat account</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Minor demat account</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">NRI demat account</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">HUF demat account</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Commodity</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Dematerialisation</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">MTF</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support Links */}
                    <div className="col-lg-2 col-md-3 col-6 mb-4">
                        <h5 className="fw-medium text-dark mb-4">Support</h5>
                        <ul className="list-unstyled" style={{ lineHeight: '2.2' }}>
                            <li><a href="#" className="text-muted text-decoration-none">Contact us</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">How to file a complaint?</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Status of your complaints</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Bulletin</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Circular</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Z-Connect blog</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Downloads</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Company Links */}
                    <div className="col-lg-2 col-md-3 col-6 mb-4">
                        <h5 className="fw-medium text-dark mb-4">Company</h5>
                        <ul className="list-unstyled" style={{ lineHeight: '2.2' }}>
                            <li><a href="#" className="text-muted text-decoration-none">About</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Philosophy</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Zerodha Cares (CSR)</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Zerodha.tech</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Open source</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Referral program</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Quick Links */}
                    <div className="col-lg-2 col-md-3 col-6 mb-4">
                        <h5 className="fw-medium text-dark mb-4">Quick links</h5>
                        <ul className="list-unstyled" style={{ lineHeight: '2.2' }}>
                            <li><a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Brokerage charges</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Market holidays</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Economic calendar</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Calculators</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Markets</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Sectors</a></li>
                            <li><a href="#" className="text-muted text-decoration-none">Gift Nifty</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section: Disclaimers and Fine Print */}
                <div className="row mt-5">
                    <div className="col-12 text-muted" style={{ fontSize: '11px', lineHeight: '1.6' }}>
                        <p className="mb-3">
                            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-primary text-decoration-none">complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className="text-primary text-decoration-none">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                        </p>
                        
                        <p className="mb-3">
                            Procedure to file a complaint on <strong className="text-primary">SEBI SCORES</strong>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>
                        
                        <p className="mb-3">
                            <a href="#" className="text-primary text-decoration-none">Smart Online Dispute Resolution</a> | <a href="#" className="text-primary text-decoration-none">Grievances Redressal Mechanism</a>
                        </p>
                        
                        <p className="mb-3">
                            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        
                        <p className="mb-3">
                            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                        
                        <p className="mb-0">
                            India's largest broker based on networth as per NSE. <a href="#" className="text-primary text-decoration-none">NSE broker factsheet</a>
                        </p>
                    </div>
                </div>

            </div>
        </footer>
     );
}

export default Footer;