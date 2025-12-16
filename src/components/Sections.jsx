import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Sections.css';
import iconToiminta from '../assets/icon_toiminta.png';
import iconApurahat from '../assets/icon_apurahat.png';
import iconValtuuskunta from '../assets/icon_valtuuskunta.png';

const Sections = () => {
    const { t } = useTranslation();

    const sections = [
        {
            id: 'toiminta',
            icon: iconToiminta,
            color: '#2c7873',
            className: 'section-toiminta'
        },
        {
            id: 'apurahat',
            icon: iconApurahat,
            color: '#4a9d96',
            className: 'section-apurahat'
        },
        {
            id: 'valtuuskunta',
            icon: iconValtuuskunta,
            color: '#1a5550',
            className: 'section-valtuuskunta'
        }
    ];

    return (
        <div className="sections-container">
            {sections.map((section, index) => {
                const isValtuuskunta = section.id === 'valtuuskunta';
                return (
                    <motion.section
                        key={section.id}
                        className={`section ${section.className}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="section-content">
                            <div className="section-header">
                                <h2>{t(`${section.id}.title`)}</h2>
                                <div className="icon-circle" style={{ borderColor: 'transparent' }}>
                                    <img src={section.icon} alt={t(`${section.id}.title`)} className="section-icon-img" />
                                </div>
                            </div>

                            <div className="section-body">
                                <p className="section-description">{t(`${section.id}.description`)}</p>

                                {/* Special case for Valtuuskunta list */}
                                {isValtuuskunta && t('valtuuskunta.list_title') && (
                                    <div className="valtuuskunta-list-container">
                                        <h3>{t('valtuuskunta.list_title')}</h3>
                                        <ul className="valtuuskunta-list">
                                            {t('valtuuskunta.list_items', { returnObjects: true })?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {t(`${section.id}.button`) && (
                                    <button className="section-button">
                                        {t(`${section.id}.button`)}
                                        <ArrowRight size={20} />
                                    </button>
                                )}

                                {/* Toiminta Section Extras */}
                                {section.id === 'toiminta' && (
                                    <>
                                        <p className="section-info">{t(`toiminta.info`)}</p>
                                        <button className="section-button">
                                            {t(`toiminta.button2`)}
                                            <ArrowRight size={20} />
                                        </button>
                                        <p className="section-info-secondary">{t(`toiminta.info2`)}</p>
                                    </>
                                )}

                                {/* Apurahat and Valtuuskunta Extras */}
                                {section.id !== 'toiminta' && t(`${section.id}.info`) && (
                                    <p className="section-info">{t(`${section.id}.info`)}</p>
                                )}
                            </div>
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
};

export default Sections;
