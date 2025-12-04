import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import './AuthorsSection.css';

const AuthorsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="authors-section">
            <div className="authors-container">
                <div className="authors-image">
                    <img src="/images/books-stack.png" alt="Books Stack" />
                </div>

                <div className="authors-content">
                    <div className="section-header">
                        <h2>{t('kirjailijat.title')}</h2>
                        <div className="icon-circle">
                            <Monitor size={48} color="var(--color-primary)" />
                        </div>
                    </div>

                    <p className="section-description">{t('kirjailijat.description')}</p>

                    <p className="section-info">{t('kirjailijat.info')}</p>

                    <button className="section-button">
                        {t('kirjailijat.button')}
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AuthorsSection;
