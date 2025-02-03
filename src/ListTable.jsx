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







import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import jsondatas from './jsonfile.json';
import { setFilteredData,setvalue,setdatas } from "./Counter";

const ListTable = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector((state) => state.counte_r.jsondatas);
  const value = useSelector((state) => state.counte_r.value);
  const operationname = useSelector((state) => state.counte_r.operationname);

  const [nametodelete,setnametodelete] = useState("");
  const [nametofilter,setnametofilter] = useState("");
  const [nametosearch,setnametosearch] = useState("");

  return (
      <>

        Enter Name : <input type="text" placeholder="name.." onChange={(e)=>setnametodelete(e.target.value)} />  
                    <button onClick={()=>dispatch(setdatas({name : nametodelete,type : "Delete"}))}>Delete Datas</button> <br />

        Enter Name : <input type="text" placeholder="name.." onChange={(e)=>setnametofilter(e.target.value)} />  
                    <button onClick={()=>dispatch(setdatas({name : nametofilter,type : "Filter"}))}>Filter Datas</button> <br />

        Enter Name : <input type="text" placeholder="name.." onChange={(e)=>setnametosearch(e.target.value)} />  
                    <button onClick={()=>dispatch(setdatas({name : nametosearch,type : "Search"}))}>Search Datas</button>

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

<br /><br />
                <p>Operation Name : {operationname}</p>    <p>{value}</p>
            <button onClick={()=>dispatch(setvalue({ type : "Addition" }))}>Increment +1</button> 
            <button onClick={()=>dispatch(setvalue({ type : "Subtraction" }))}>Decrement -1</button> 
      </>
  );
};

export default ListTable;









