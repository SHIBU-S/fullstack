// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFilteredData } from './actions';
// import jsondatas from './jsonfile.json';

// function ListTable() {
//     const dispatch = useDispatch();
//     const filteredData = useSelector((state) => state.user);


//     return (
//         <>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>NAME</th>
//                         <th>AGE</th>
//                         <th>GENDER</th>
//                         <th>STATE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {jsondatas.map((data) => (
//                         <tr>
//                             <td>{data.Name}</td>
//                             <td>{data.Age}</td>
//                             <td>{data.Gender}</td>
//                             <td>{data.State}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <br />

//             <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"FILTERAGE"}))}>
//                 Above 30
//             </button>

//             <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYGENDER_MALE"}))}>
//                 By Gender-Male
//             </button>

//             <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYGENDER_FEMALE"}))}>
//                 By Gender-Female
//             </button>

//             <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYSTATE_KERALA"}))}>
//                 By State-Kerala
//             </button>

//             {filteredData.length>0 && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>NAME</th>
//                             <th>AGE</th>
//                             <th>GENDER</th>
//                             <th>STATE</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredData.map((filtered) => (
//                             <tr>
//                                 <td>{filtered.Name}</td>
//                                 <td>{filtered.Age}</td>
//                                 <td>{filtered.Gender}</td>
//                                 <td>{filtered.State}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </>
//     );
// }

// export default ListTable;





import React from "react";
import { useSelector, useDispatch } from "react-redux";
import jsondatas from './jsonfile.json';
import { setFilteredData } from "./Counter";

const ListTable = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.counte_r.jsondatas);

  return (
      <>
        <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                        <th>STATE</th>
                    </tr>
                </thead>
                <tbody>
                    {jsondatas.map((data) => (
                        <tr>
                            <td>{data.Name}</td>
                            <td>{data.Age}</td>
                            <td>{data.Gender}</td>
                            <td>{data.State}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

            <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"FILTERAGE"}))}>
                Above 30
            </button>

            <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYGENDER_MALE"}))}>
                By Gender-Male
            </button>

            <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYGENDER_FEMALE"}))}>
                By Gender-Female
            </button>

            <button className="border bg-primary text-white border-3" onClick={()=>dispatch(setFilteredData({type :"BYSTATE_KERALA"}))}>
                By State-Kerala
            </button>

            {filteredData.length>0 && (
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>STATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((filtered) => (
                            <tr>
                                <td>{filtered.Name}</td>
                                <td>{filtered.Age}</td>
                                <td>{filtered.Gender}</td>
                                <td>{filtered.State}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
      </>
  );
};

export default ListTable;









