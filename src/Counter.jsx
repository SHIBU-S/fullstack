import jsondatas from "./jsonfile.json";

const initialize = jsondatas;

function counterReducer(state=initialize,action)
{
    debugger
    switch(action.type.type)
    {
        case "FILTERAGE":
            return state = initialize.filter((fil) => Number(fil.Age) > 30);
        case "BYGENDER_MALE":
            return state = initialize.filter((fil) => fil.Gender === "Male");
        case "BYGENDER_FEMALE":
            return state = initialize.filter((fil) => fil.Gender === "Female");
        case "BYSTATE_KERALA":
            return state = initialize.filter((fil) => fil.State === "Kerala");
        default:
            return state = "";
    }
}

export default  counterReducer;