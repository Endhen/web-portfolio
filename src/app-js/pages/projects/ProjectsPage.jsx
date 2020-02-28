
import React, { Component } from 'react'

// dev screenshots
import leftArrow from './assets/left.svg'
import rightArrow from './assets/right.svg'
import resaLouvre from './assets/resalouvre.png'
import doggyStrunk from './assets/doggy_strunk.png'
import cefrani from './assets/cefrani.png'
import nantes from './assets/nantes.png'

// cdp screenshots

const devProjects = [
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
const cdpProjects = [
    {
        title: "Refonte d’un site web",
        screenshot: resaLouvre,
        realisations: [
            "Benchmark fonctionnel",
            "Audit de qualité web avec le référentiel Opquast",
            "Spécifications fonctionnelles",
            "Wireframes avancés",
            "Document synthétique présentant les impacts de la refonte",
            "Planification en diagramme de Gantt",
            "Budget",
            "Devis",
            "Présentaion de la proposition de refonte",
        ]
    },
    {
        title: "Refonte d’un site web",
        screenshot: resaLouvre,
        realisations: [
            "Analyse des besoins",
            "Analyse des risques",
            "Adaptation du projet en fonction d’imprévus",
            "Plan de prévention",
            "Planification en diagramme de Gantt",
            "Budget",
            "Devis",
            "Présentation de l’analyse des risques et du cadrage du projet",
        ]
    },
]

class ProjectsPage extends Component {
    state = { 
        pos: 0,
        spanVisible: '',
        mode: 'dev',
    }

    boucle(index) { 
        let projects = undefined
        if (this.state.mode == 'dev') {
            projects = devProjects;
        } else {
            projects = cdpProjects;
        }

        if (index > projects.length-1) {
            return 0
        }
        if (index < 0) {
            return projects.length-1
        }
        console.log(index)
        return index
    }

    next(direction) {
        this.setState({pos: this.boucle(this.state.pos + 1*direction) })
    }

    handleClick = () => {
        let visibility = ''
        this.state.spanVisible == ''? visibility = 'visible': ''
        this.setState({spanVisible: visibility})
    }

    changeMode = () => {
        console.log('ok')
        if (this.state.mode == 'dev') {
            console.log('cdp')
            this.setState({ mode: 'cdp', pos: 0})
        } else {
            console.log('dev')
            this.setState({ mode: 'dev', pos: 0})
        }
    }

    render() {
        let project = undefined
        let { spanVisible, mode } = this.state
        if (mode == 'dev') {
            project = devProjects[this.state.pos];
        } else {
            project = cdpProjects[this.state.pos];
        }

        return (
            <section id="projects" className="projects">
                <h2 onClick={this.handleClick}>
                {mode == 'dev'?'Développement web':'Gestion de projet'}
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                        </path>
                    </svg>
                    <span onClick={this.changeMode} className={spanVisible}>{mode == 'cdp'?'Développement web':'Gestion de projet'}</span>
                </h2>
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
                    <div className={`project ${mode == 'cdp'?'mode-cdp':''}`}>
                        <div className="project__header">
                            <div className="frame">
                                <img src={project.screenshot} alt="screenshot du site Resalouvre"/>
                            </div>
                            <h2>{project.title}</h2>
                            {project.tech?
                            <p className="tags">
                                {project.tech.map((tech, index) => {
                                        return <span key={tech} className={`tag-${tech}`}>{tech}</span>
                                })}
                            </p>
                            :''}
                        </div>
                        <div className={`project__description ${mode == 'cdp'?'mode-cdp':''}`}>
                            <h3>Réalisations</h3>
                            <ul>
                                {project.realisations.map((realisation, index) => {
                                    return <li key={index}>{realisation}</li>
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