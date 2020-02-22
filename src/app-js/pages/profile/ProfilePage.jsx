import React from 'react'

import cadrage from './assets/Cadrage.svg'
import budget from './assets/Budget.svg'
import benchmark from './assets/Benchmark.svg'
import audit from './assets/Audit.svg'
import analyse from './assets/Analyse.svg'

const ProfilePage = () => {

    return (
        <section className="profil">
            <section>
                <h2>Chef de projet web étudiant avec Open Classroom</h2>
                <p>
                    Un apprentissage suivi entièrement en ligne à travers des 
                    projets concret accompagné par un mentor, favorisant 
                    l’autonomie et l’organisation pour la réussite du parcours.
                </p>
                <div>
                    <img src={cadrage} alt="illustration document de cadrage"/>
                    <p>
                        Du recueil du besoin client affiné en spécifications 
                        fonctionnelles à la conceptions de maquettes d’interface 
                        utilisateur.
                    </p>
                </div>
                <div>
                    <p>
                        De la définition du planning avec un diagram de Gantt 
                        pour délimiter les délais du projet. À la réalisation 
                        du budget et du devis.
                    </p>
                    <img src={budget} alt="illustration document de budget"/>
                </div>
                <p>
                    Tout en ayant été introduit au méthodes de projets agiles.<br/>
                    J’ai pu acquérir une base méthodologique et d’outils pratiques 
                    pour une définition et un cadrage complet d’un projet web.
                </p>
            </section>
            <section>            
                <h2>Compétances d'évaluation et analyse</h2>
                <div>
                    <img src={benchmark} alt="illustration d'inspection benchmark"/>
                    <p>
                        Priorisation des fonctionnalités clés pour l’amélioration 
                        ou le  développement d’un site à l’aide d’un benchmark 
                        fonctionnel.
                    </p>
                </div>
                <div>
                    <p>
                        Évaluation objective à l’aide d’un référentiel de la 
                        qualité d’un produit web et des voies d'améliorations 
                        SEO.
                    </p>
                    <img src={audit} alt="illustration de checklist audit"/>
                </div>
                <div>
                    <img src={analyse} alt="illustration d'analyse"/>
                    <p>
                        Anticipation des différentes fins de scénario possibles 
                        à l’aide d’une analyse des risques et d’un plan de 
                        prévention.
                    </p>
                </div>
            </section>
            <button className="cv">
                Télécharger mon cv
            </button>
        </section>
    )
}

export default ProfilePage




