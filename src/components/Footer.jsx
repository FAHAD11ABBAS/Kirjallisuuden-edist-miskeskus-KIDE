import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './Footer.css';
import logoKide from '../assets/logo_kide.png';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo-block">
                        <img src={logoKide} alt="KIDE" className="footer-logo-img" />
                        <div className="footer-logo-text">
                            <h3>Kirjallisuuden</h3>
                            <h3>edistämiskeskus</h3>
                        </div>
                    </div>

                    <div className="footer-nav">
                        <p>{t('footer.left_nav.apurahat')}</p>
                        <p>{t('footer.left_nav.residenssit')}</p>
                        <p>{t('footer.left_nav.koulutusta')}</p>
                    </div>
                </div>

                <div className="footer-right">
                    <h4>{t('footer.title')}</h4>

                    <div className="footer-contact">
                        <p className="org-name">{t('footer.organization')}</p>
                        <p>{t('footer.phone')}</p>
                        <p>{t('footer.email')}</p>
                        <p>{t('footer.address')}</p>
                    </div>

                    <div className="footer-actions">
                        <button className="footer-btn">
                            {t('footer.button1')}
                            <ArrowRight size={16} />
                        </button>
                        <button className="footer-btn">
                            {t('footer.button2')}
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-bar">
                <div className="footer-bottom-content">
                    <span>{t('footer.links')}</span>
                    <span>{t('footer.rights')}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
