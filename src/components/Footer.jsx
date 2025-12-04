import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="footer-logo">
                    <h2>KIDE</h2>
                </div>
                <div className="footer-links">
                    {/* Social links or contact info could go here */}
                </div>
                <div className="footer-copy">
                    <p>{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
