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
  initialState: { jsondatas : [] },
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
    }
  },
});

export const { setFilteredData } = counterSlice.actions;
export default counterSlice.reducer;



