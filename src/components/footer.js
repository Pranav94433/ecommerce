import React from "react";
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Phoenix Shopping. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
