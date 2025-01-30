import { useReducer, useState } from "react";
import { myfunction } from "./MyFunction";


function UseReducer(){

    const initialvalue = {count:0,backgroundColor:"red"};
    const [state,dispatch] = useReducer(myfunction,initialvalue);

    function redcolor(){
        dispatch({type : "ChangeRed"});
    }
    function yellowcolor(){
        dispatch({type : "ChangeYellow"});
    }
    function greencolor(){
        dispatch({type : "ChangeGreen"});
    }

    return(
        <>
            <div style={{backgroundColor : state.backgroundColor}} className="m-5 p-5 border">
                <button onClick={redcolor}>Red</button>
                <button onClick={yellowcolor}>Yellow</button>
                <button onClick={greencolor}>Green</button>
            </div>
        </>
    );
}

export default UseReducer;