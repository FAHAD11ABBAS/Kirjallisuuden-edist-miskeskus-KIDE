import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-container">
                    <div className="footer-logo">
                        <div className="hexagon-logo">
                            <span>KIDE</span>
                        </div>
                        <h3>Kirjallisuuden<br />edistämiskeskus</h3>
                    </div>

                    <div className="footer-content">
                        <h2>{t('footer.title')}</h2>

                        <div className="contact-info">
                            <p className="organization">{t('footer.organization')}</p>
                            <p>{t('footer.phone')}</p>
                            <p>{t('footer.email')}</p>
                            <p>{t('footer.address')}</p>
                        </div>

                        <div className="footer-buttons">
                            <button className="footer-button">
                                {t('footer.button1')}
                                <ArrowRight size={20} />
                            </button>
                            <button className="footer-button">
                                {t('footer.button2')}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container">
                    <p className="footer-links">{t('footer.links')}</p>
                    <p className="footer-rights">{t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
