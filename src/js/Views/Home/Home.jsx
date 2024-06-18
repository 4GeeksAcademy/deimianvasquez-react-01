import React from "react";
import TitleMain from "../../components/TitleMain/TitleMain.jsx";
import Card from "../../components/Card/Card.jsx";
import TitleSecondary from "../../components/TitleSecondary/TitleSecondary.jsx";


const Home = () => {
    /* props --> properties */

    /* viene de una database */
    const personas = [
        { nombre: "Juan" },
        { nombre: "Pedro" },
        { nombre: "María" },
        { nombre: "Ana" },
        { nombre: "Carlos" },
    ];



    return (
        <>
            <div className="container">
                {/* <h1 className="title-main">
                Hola soy el home
            </h1> */}
                <TitleMain
                    title="Este es el titulo principal"
                    style="title-main"
                />


                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus adipisci odit, obcaecati blanditiis quisquam nesciunt provident consequuntur incidunt atque velit, tempore nam? Repellat iure perferendis magnam obcaecati facilis. Tenetur.
                </p>

                <TitleMain
                    title="Soy el segundo titulo"
                    style="title-main"
                />

                <ul>
                    <li>HOla</li>
                    <li>como</li>
                    <li>estas</li>
                    <li>tu</li>
                    <li>bien</li>
                </ul>


                <TitleMain
                    title="Ya soy el tercer title"
                    style={"title-main"}
                />

                {

                }
                <div className="row">
                    {
                        personas.map((item, index) => {
                            return (
                                <Card key={index} info={item} />
                            )
                        })
                    }
                </div>


            </div>


            <div className="container my-5">
                <TitleSecondary>
                    <h1>Hola que tal, soy un elemento</h1>
                    <TitleMain
                        title="Hola desde el más allá"
                        style="title-main"
                    />
                </TitleSecondary>
            </div>
        </>
    )
}


export default Home;