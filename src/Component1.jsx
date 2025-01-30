import { useState } from "react";
import {userContext} from "./Storage";
import ContextForm from "./ContextForm";


function Component1(){

    const [name,setname] = useState("");
    const [age,setage] = useState(0);

    return(
        <>
            <userContext.Provider value={{name,setname,age,setage}}>
                <ContextForm/>
            </userContext.Provider>
        </>
    )
}

export default Component1;