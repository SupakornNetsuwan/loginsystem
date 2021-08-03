import React from "react";
import { useRouteMatch , useParams } from "react-router-dom"
const Recover = () =>{
    console.log(useRouteMatch())
    let {type} = useParams()

    return(
        <div>
            <p>{type}</p>
        </div>
    )
}

export default Recover;