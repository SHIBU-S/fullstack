import { userContext } from "./Storage";
import { useContext } from "react";

function ContextForm(){

    const {name,setname,age,setage} = useContext(userContext);

    return(
        <>
            Name : <input type="text" onChange={(e)=>setname(e.target.value)} />  
            Age :  <input type="number" onChange={(e)=>setage(parseInt(e.target.value))} />

            <button onClick={submitdatas}>Submit Datas</button>
            
        </>
    );

    function submitdatas(){
        if(name=="" || age==""){
            alert("Please enter all the fields..");
        }
        else{
            alert("Successfully..");
        }
    }
}

export default ContextForm;