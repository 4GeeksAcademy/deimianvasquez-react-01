import React from "react"
import { Navbar } from "../Navbar/Navbar.jsx"
import Home from "../../views/Home/Home.jsx"

//componentes, se escriben con la primer letra en mayuscula
//un componente es una función que retorna jsx
//Un componente solo retorna un padre(NO MUCHOS HIJOS)
// fracmento de react
function Layout() {
    return (
        <>
             {/* Routing */}
            <Navbar />
            <Home />
        </>
    )
}

export default Layout