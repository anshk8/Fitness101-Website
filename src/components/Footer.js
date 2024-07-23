import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope-square"></i>
                </a>
            </div>
            <p>&copy; 2024 Ansh Kakkar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
