import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, FileText, UsersRound, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Sections.css';

const Sections = () => {
    const { t } = useTranslation();

    const sections = [
        {
            id: 'toiminta',
            icon: Lightbulb,
            color: '#2c7873'
        },
        {
            id: 'apurahat',
            icon: FileText,
            color: '#4a9d96'
        },
        {
            id: 'valtuuskunta',
            icon: UsersRound,
            color: '#1a5550'
        }
    ];

    return (
        <div className="sections-container">
            {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                    <motion.section
                        key={section.id}
                        className="section"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div className="section-content">
                            <div className="section-header">
                                <h2>{t(`${section.id}.title`)}</h2>
                                <div className="icon-circle" style={{ borderColor: section.color }}>
                                    <Icon size={48} color={section.color} />
                                </div>
                            </div>

                            <p className="section-description">{t(`${section.id}.description`)}</p>

                            {t(`${section.id}.button`) && (
                                <button className="section-button">
                                    {t(`${section.id}.button`)}
                                    <ArrowRight size={20} />
                                </button>
                            )}

                            {t(`${section.id}.info`) && (
                                <p className="section-info">{t(`${section.id}.info`)}</p>
                            )}
                        </div>
                    </motion.section>
                );
            })}
        </div>
    );
};

export default Sections;
