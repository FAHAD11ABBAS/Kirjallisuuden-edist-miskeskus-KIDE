import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import './AuthorsSection.css';
import bgImage from '../assets/bg_kirjailijakuvia.jpg';
import iconKirjailijakuvia from '../assets/icon_kirjailijakuvia.png';

const AuthorsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="authors-section" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="authors-overlay"></div>
            <div className="authors-container">
                <div className="authors-content-centered">

                    <div className="authors-header">
                        <h2>{t('kirjailijakuvia.title')}</h2>
                        <div className="authors-subtext">
                            <p>{t('kirjailijakuvia.description')}</p>
                        </div>
                    </div>

                    <div className="authors-body">
                        <div className="authors-text-blocks">
                            <p>{t('kirjailijakuvia.p1')}</p>
                            <p>{t('kirjailijakuvia.p2')}</p>
                            <p>{t('kirjailijakuvia.p3')}</p>
                            <p>{t('kirjailijakuvia.p4')}</p>
                        </div>

                        <div className="authors-action">
                            <button className="section-button white-btn">
                                {t('kirjailijakuvia.button')}
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorsSection;
