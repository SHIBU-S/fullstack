export function myfunction(state,action){
        switch(action.type){
            case "ChangeRed" :
                return {count : state.count+1, backgroundColor:"red"}
            case "ChangeYellow" :
                return {count : state.count+1, backgroundColor:"yellow"}
            case "ChangeGreen" :
                return {count : state.count+1, backgroundColor:"green"}
            default:
                throw Error("Error");
        }
    }