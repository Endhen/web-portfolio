
import React from 'react'

import leftArrow from './assets/left.svg'
import rightArrow from './assets/right.svg'
import screenshot from './assets/resalouvre.png'


const ProjectsPage = () => {
    return (
        <section className="projects">
            <h2>Développement web</h2>
            <p>
                Chez Open Classroom le travail de chaques projet est 
                formalisé et présenté, renforçant ainsi les 
                compétences de communication. Pour toutes questions 
                n'hésitez pas à me contacter sur 
                <a href="#">LinkedIn</a>.
            </p>
            <div className="slider">
                <div className="left">
                    <button className="slide-button">
                        <img src={leftArrow} alt="icone gauche"/>
                    </button>
                </div>
                <div className="project">
                    <div className="project__header">
                        <div className="frame">
                            <img src={screenshot} alt="screenshot du site Resalouvre"/>
                        </div>
                        <h2>ResaLouvre</h2>
                    </div>
                    <div className="project__description">
                        <h3>Réalisations</h3>
                        <ul>
                            <li>Paiement en ligne avec Stripe</li>
                            <li>
                                Formulaire avec des contraintes de réservations 
                                avancés
                            </li>
                            <li>Tests Unitaires</li>
                            <li>Design responsive</li>
                            <li>Confirmation par e-mail</li>
                            <li>Note de cadrage</li>
                            <li>Documentation</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <button className="slide-button">
                        <img src={rightArrow} alt="icone droite"/>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage