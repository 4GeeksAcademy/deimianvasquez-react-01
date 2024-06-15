import React from "react"
import { Navbar } from "../Navbar/Navbar.jsx"

//componentes, se escriben con la primer letra en mayuscula
//un componente es una función que retorna jsx
//Un componente solo retorna un padre(NO MUCHOS HIJOS)
// fracmento de react
function Layout() {
    return (
        <>
            <Navbar />

            <div className="container">

                <h1>Hola ¿qué tal desde jsx</h1>
                <p>hola</p>
            </div>
        </>
    )
}

export default Layout