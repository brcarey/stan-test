import * as React from 'react';

export const Footer = (props:any) => {
    return (
        <div className="footer">
            <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Collection Statement</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Manage Account</a></li>
            </ul>
            
            <p className="copyright">Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.</p>
            
            <div className="flex-grid">
                <div className="col social">
                    <ul>
                        <li><img src="assets/facebook-white.svg" alt="facebook"></img></li>
                        <li><img src="assets/twitter-white.svg" alt="twitter"></img></li>
                        <li><img src="assets/instagram-white.svg" alt="instagram"></img></li>
                    </ul>
                </div>
                <div className="col app-stores">
                    <ul>
                        <li><img src="assets/app-store.svg" alt="app store"></img></li>
                        <li><img src="assets/play-store.svg" alt="play store"></img></li>
                        <li><img src="assets/windows-store.svg" alt="windows store"></img></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}