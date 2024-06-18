import React from "react";
import PropTypes from "prop-types"

function TitleMain(props) {

    console.log(props.title)

    return (
        <h1 className={props.style}>
            {props.title}
        </h1>
    )
}

export default TitleMain

TitleMain.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired
}