
import React, { component } from 'react'

import "./styles/main.scss";

import ContactPage from './pages/contact/ContactPage.jsx'
import ProjectsPage from './pages/projects/ProjectsPage.jsx'
import SkillsPage from './pages/skills/SkillsPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'
import LegalNotice from './pages/legal-notice/LegalNotice.jsx'
import Error404 from './pages/error/Error404.jsx'

import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect, 
    Link, 
} from "react-router-dom"
 
   
function App() {
    
    return (
        <Router>
            <header key="header">
                <nav className="menu">
                    <Link data-name="profile" to="/profile">Profil</Link>
                    <Link data-name="skills" to="/skills">Compétences</Link>
                    <Link data-name="projects" to="/projects">Projets</Link>
                    <a data-name="blog" href="" target="">Blog</a>
                    <Link data-name="contact" to="/contact">Contact</Link>
                    <div className="btn-close">fermer le menu ⵝ</div>
                    <div className="indicator"></div>
                </nav>
                <div className="btn-open">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </div>
            </header>
            <div className="content" key="content">
                <Switch>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/projects">
                        <ProjectsPage/>
                    </Route>
                    <Route path="/skills">
                        <SkillsPage/>
                    </Route>
                    <Route path="/profile">
                        <ProfilePage/>
                    </Route>
                    <Route path="/legal-notice">
                        <LegalNotice/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/profile"/>
                    </Route>
                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export { App }
