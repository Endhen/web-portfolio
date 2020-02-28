import React from 'react'
import { useLocation } from "react-router-dom"

const Error404 = () => {
    let location = useLocation();

    return (
        <div className="error">
            <h2>404</h2>
            <p>Aucune page ne correspond à cette URL</p>
            <p className="path">{location.pathname}</p>
        </div>
    )
}

export default Error404