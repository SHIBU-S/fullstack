// import jsondatas from "./jsonfile.json";

// const initialize = jsondatas;

// function counterReducer(state=initialize,action)
// {
//     debugger
//     switch(action.type.type)
//     {
//         case "FILTERAGE":
//             return state = initialize.filter((fil) => Number(fil.Age) > 30);
//         case "BYGENDER_MALE":
//             return state = initialize.filter((fil) => fil.Gender === "Male");
//         case "BYGENDER_FEMALE":
//             return state = initialize.filter((fil) => fil.Gender === "Female");
//         case "BYSTATE_KERALA":
//             return state = initialize.filter((fil) => fil.State === "Kerala");
//         default:
//             return state = "";
//     }
// }

// export default  counterReducer;






import { createSlice } from "@reduxjs/toolkit";
import jsondatas from './jsonfile.json';


const counterSlice = createSlice({
  name: "Display Datas",
  initialState: { jsondatas : [] , value : 0 , operationname : "" },
  reducers: {
    setFilteredData: (state,action) => { 
      if(action.payload.type === "FILTERAGE")
      {
        state.jsondatas = jsondatas.filter((fil) => Number(fil.Age) > 30); 
      }
      else if(action.payload.type === "BYGENDER_MALE")
      {
        state.jsondatas = jsondatas.filter((fil) => fil.Gender === "Male");
      }
      else if(action.payload.type === "BYGENDER_FEMALE")
      {
        state.jsondatas = jsondatas.filter((fil) => fil.Gender === "Female");
      }
      else if(action.payload.type === "BYSTATE_KERALA")
      {
        state.jsondatas = jsondatas.filter((fil) => fil.State === "Kerala");
      }
      else
      {
        state.jsondatas = { jsondatas : [] };
      }
    },


    setvalue : (state,action) => {
      if(action.payload.type === "Addition")
      {
        state.value += 1;
        state.operationname = "Addition";
      }
      else if(action.payload.type === "Subtraction")
      {
        state.value -= 1;
        state.operationname = "Subtraction";
      }
      else if(action.payload.type === "Reset")
      {
        state.value = 0;
        state.operationname = "Reset";
      }
      else
      {
        state.value;
      }
    },

      
    setdatas : (state,action) => {
      if(!action.payload.name){
        alert(`Please fill a name for ${action.payload.type}..`);
      }
      else if(action.payload.type === "Insert"){
        if(!action.payload.Name || !action.payload.Age || !action.payload.Gender || !action.payload.State){
          alert(`Please enter a name for ${action.payload.type}..`);
        }
        else{
          const newEntry = {
            Name: action.payload.Name,
            Age : Number(action.payload.Age),
            Gender : action.payload.Gender,
            State : action.payload.State
          };
          state.jsondatas.push(newEntry);
          alert(`${action.payload.Name} Details successfully inserted..`);
        }
      }
      else if(action.payload.type === "Delete"){
        const nametodelete = action.payload.name.toLocaleLowerCase();
        const nameexists = state.jsondatas.map((totalnames) => totalnames.Name.toLocaleLowerCase() === nametodelete);
        if(!nameexists){
          alert(`Please enter a valid name..`);
        }
        else{
          state.jsondatas = jsondatas.filter((delname) => delname.Name.toLocaleLowerCase() !== action.payload.name.toLocaleLowerCase());
          alert(`${action.payload.name} Details Successfully deleted..`);
        }
      }
      else if(action.payload.type === "Filter"){
        state.jsondatas = jsondatas.filter((filname) => filname.Name.toLocaleLowerCase() === action.payload.name.toLocaleLowerCase());
      }
      else if(action.payload.type === "Search"){
        state.jsondatas = jsondatas.filter((searchname) => searchname.Name.toLocaleLowerCase().includes(action.payload.name.toLocaleLowerCase()));
        state.operationname = action.payload.name;
      }
      else{
        alert("None");
      }
    }
    
  },
});

export const { setFilteredData,setvalue,setdatas } = counterSlice.actions;
export default counterSlice.reducer



