import React from "react";
import "./navbar.css"


export const Navbar = () => {
    let name = "Deimian"

    // para colocar estilos en linea debemos pasas un objeto con lso estilos
    /*
        Así se escriben un objeto
        const nombreObj = {
            color:"red"
        }
    */

    let styles = {
        fontSize: "2rem",
        margin: "100px"
    }


    let arr = ["Deimian", "Juan", "Martin"]
    let num = Math.floor(Math.random() * arr.length)


    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" >Sobre Nosotros</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

