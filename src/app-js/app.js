
import React, { component } from 'react'

import "./styles/main.scss";

import ContactPage from './pages/contact/ContactPage.jsx'
import ProjectsPage from './pages/projects/ProjectsPage.jsx'
import SkillsPage from './pages/skills/SkillsPage.jsx'
import ProfilePage from './pages/profile/ProfilePage.jsx'

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
 
   
function App() {

    return (
        <Router>
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
                <Route path="/">
                    <Redirect to="/profile"/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App