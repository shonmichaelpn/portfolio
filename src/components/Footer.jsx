function Footer() {
    return (
        <footer className="footer glass">
            <div className="section-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <a href="#top" className="footer-name">Shon<span>Michael</span></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Shon Michael P N.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
