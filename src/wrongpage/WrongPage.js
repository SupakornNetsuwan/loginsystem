import React from "react";
import { useRouteMatch } from "react-router-dom"

const WrongPage = () =>{
    console.log(useRouteMatch())
    return(
        <div>
            <p>Page not found</p>
        </div>
    )
}

export default WrongPage;