import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './DiagramSection.css';
import diagramImg from '../assets/diagram_full.png';

const DiagramSection = () => {
    const { t } = useTranslation();

    return (
        <section className="diagram-section">
            <div className="diagram-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('diagram.title')}
                </motion.h2>

                <div className="diagram-image-container">
                    <img src={diagramImg} alt="KIDE Diagram" className="diagram-full-img" />
                </div>

                <div className="diagram-description">
                    <p>{t('diagram.caption')}</p>
                </div>
            </div>
        </section>
    );
};

export default DiagramSection;
