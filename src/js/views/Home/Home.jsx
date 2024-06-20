import React, { useState, useEffect } from "react";
import TitleMain from "../../components/TitleMain/TitleMain.jsx";
import Card from "../../components/Card/Card.jsx";
import TitleSecondary from "../../components/TitleSecondary/TitleSecondary.jsx";


const Home = () => {

    //useState
    //destructucturación

    //EJEMPLO DE DESTRUCTURING CON ARRAYS
    //const [nombre, apellido] = ["Deimian", "vasquez"]

    const [count, setCount] = useState(0)
    const [time, setTime] = useState(new Date())
    const [counter, setCounter] = useState(0)
    const [stop, setStop] = useState(true)


    function decrementa() {
        setCount(count - 1)
    }

    function changeColor(num) {
        if (num < 0) {
            return "text-danger"
        } else if (num > 0) {
            return "text-success"
        } else {
            return "text-warning"
        }
    }


    useEffect(() => {
        console.log("Hola ¿qué tal?")
    }, [count])


    useEffect(() => {
        let itenterval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(itenterval)
    }, [])


    useEffect(() => {
        if (!stop) return
        let interval = setInterval(() => {
            setCounter(counter + 1)
        }, 100)

        return () => clearInterval(interval)
    }, [counter, stop])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <h1
                            className={changeColor(count)}
                        >
                            {count}
                        </h1>

                        <button onClick={() => setCount(count + 1)}  >Incrementar</button>
                        <button onClick={decrementa}>Decrementar</button>
                    </div>
                    <div className="col-12 mt-5">
                        <h1>{time.toString()}</h1>
                    </div>
                    <div className="col-12 mt-5">
                        <h1>{counter}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <h1>Uno: {Math.floor(counter / 1) % 10}</h1>
                        <h1>Dos: {Math.floor(counter / 10) % 10}</h1>
                        <h1>Tres: {Math.floor(counter / 100) % 10}</h1>
                    </div>
                    <div className="col-">
                        <button onClick={() => setStop(!stop)}>{stop ? "Pausar" : "Arrancar"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Home;