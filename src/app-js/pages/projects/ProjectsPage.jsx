
import React, { Component } from 'react'

import leftArrow from './assets/left.svg'
import rightArrow from './assets/right.svg'
import resaLouvre from './assets/resalouvre.png'
import doggyStrunk from './assets/doggy_strunk.png'
import cefrani from './assets/cefrani.png'
import nantes from './assets/nantes.png'

const projects = [
    {
        title: "ResaLouvre",
        tech: ["html", "css", "js", "symfony-3"],
        screenshot: resaLouvre,
        realisations: [
            "Paiement en ligne avec Stripe",
            "Formulaire de réservations avec contraintes",
            "Tests Unitaires",
            "Design responsive",
            "Confirmation par e-mail",
            "Note de cadrage",
            "Document de présentation",
        ]
    },
    {
        title: "Doggy Strunk",
        tech: ["html", "css", "jquery", "php"],
        screenshot: doggyStrunk,
        realisations: [
            "Intégration",
            "Formulaire de contact",
            "Design",
            "Back-end",
        ]
    },
    {
        title: "Cefrani",
        tech: ["html", "css", "bootstrap", "symfony-4"],
        screenshot: cefrani,
        realisations: [
            "Conception graphique",
            "Sélection par catégories",
            "Panier",
            "Formulaire de contact et de réservation",
            "Back-office avec fonctionnalités CRUD",
            "Gestion des réponse par email",
        ]
    },
    {
        title: "Nantes",
        tech: ["html", "css", "word-press"],
        screenshot: nantes,
        realisations: [
            "Blog",
            "Réservation",
            "Formulaire de contact",
            "Documentation d’utilisation",
        ]
    },
]

class ProjectsPage extends Component {
    state = { pos: 0 }

    boucle(index) { 
        if (index > projects.length-1) {
            return 0
        }
        if (index < 0) {
            return projects.length-1
        }
        return index
    }

    next(direction) {
        console.log('next', this.state.pos)
        this.setState({pos: this.boucle(this.state.pos + 1*direction) })
    }

    render() {
        let project = projects[this.state.pos];
        return (
            <section id="projects" className="projects">
                <h2>Développement web</h2>
                <p>
                    Chez Open Classroom le travail de chaques projet est 
                    formalisé et présenté, renforçant ainsi les 
                    compétences de communication. Pour toutes questions 
                    n'hésitez pas à me contacter sur <a href="#">LinkedIn</a>.
                </p>

                <div className="slider">    
                    <div className="left">
                        <button className="slide-button" onClick={() => this.next(-1)}>
                            <img src={leftArrow} alt="icone gauche"/>
                        </button>
                    </div>
                    <div className="project">
                        <div className="project__header">
                            <div className="frame">
                                <img src={project.screenshot} alt="screenshot du site Resalouvre"/>
                            </div>
                            <h2>{project.title}</h2>
                            <p className="tags">
                                {project.tech.map((tech) => {
                                        return <span className={`tag-${tech}`}>{tech}</span>
                                })}
                            </p>
                        </div>
                        <div className="project__description">
                            <h3>Réalisations</h3>
                            <ul>
                                {project.realisations.map((realisation) => {
                                    return <li>{realisation}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <button className="slide-button" onClick={() => this.next(+1)}>
                            <img src={rightArrow} alt="icone droite"/>
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectsPage