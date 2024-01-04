import React, { useContext } from "react";
import CricketContext from "../Context/CricketContext";

const Hello=()=>{
    let {cricketer, setCricketer}= useContext(CricketContext)
    return(
        <div>
            <h1>{cricketer.name}</h1>
            <h1>{cricketer.age}</h1>
            <h1>{cricketer.Role}</h1>
            <h1>{cricketer.Runs}</h1>

            <button onClick={()=>setCricketer({...cricketer, Runs: cricketer.Runs+1})}>Increase Runs</button>
        </div>
    )
}

export default Hello;