import React, { useState } from "react";
import CricketContext from "./CricketContext";

const CricketProvider=(props)=>{
    const [cricketer, setCricketer]= useState({
        name:"MS Dhoni",
        age: 42,
        Role: "Captain",
        Runs: 10000
    })

    return(
        <CricketContext.Provider value={{
            cricketer: cricketer,
            setCricketer: setCricketer
        }}>
            {props.children}
        </CricketContext.Provider>
    )
}

export default CricketProvider;