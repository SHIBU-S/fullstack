

// import React, { useEffect, useState } from "react";
// import axios from "axios";


// function FormPage() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [coursename, setcoursename] = useState("");
//   const [displaydatas, setdisplaydatas] = useState([]);
//   const [editData, setEditData] = useState(null); 

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const userData = { name, age, coursename };

//     try {
//       if (editData) {
//         const response = await axios.put(
//           `http://localhost:1000/updatedata/${editData._id}`,
//           userData
//         );
//         alert(response.data.message);
//       } else {
//         const response = await axios.post("http://localhost:1000/insertdatas", userData);
//         alert(response.data.message);
//       }

//       setName("");
//       setAge("");
//       setcoursename("");
//       setEditData(null); 
//       fetchData(); 
//     } catch (error) {
//       alert("There is an error while inserting/updating data..");
//     }
//   }

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get("http://localhost:1000/getdatas");
//         setdisplaydatas(response.data);
//       } catch (error) {
//         alert("There is an error fetching data.");
//       }
//     }
//     fetchData();
//   }, []);


//     async function deletedatas(id)
//     {
//         try {
//             const response = await axios.delete(`http://localhost:1000/deletedata/${id}`);
//             alert(response.data.message);
//             fetchData(); 
//         } 
//         catch (error) {
//             alert("There was an error deleting data.");
//         }
//     };

//   function updatedatas(data)
//   {
//     setName(data.name);
//     setAge(data.age);
//     setcoursename(data.coursename);
//     setEditData(data); 
//   };

//   return (
//     <>
//       <h1>{editData ? "Update Data" : "Insert Data"}</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required />
//         <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
//         <input type="text" placeholder="Coursename" value={coursename} onChange={(e) => setcoursename(e.target.value)} />
//         {/* <input type="file" /> */}
//             <button type="submit">{editData ? "Update" : "Submit"}</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>NAME</th>
//             <th>AGE</th>
//             <th>COURSENAME</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {displaydatas.map((insertedData) => (
//             <tr key={insertedData._id}>
//               <td>{insertedData.name}</td>
//               <td>{insertedData.age}</td>
//               <td>{insertedData.coursename}</td>
//               <td>
//                 <button onClick={() => deletedatas(insertedData._id)} style={{ backgroundColor: "red", color: "white" }} >
//                   Delete
//                 </button>
//                 <button  onClick={() => updatedatas(insertedData)} style={{ backgroundColor: "blue", color: "white" }} >
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default FormPage;












import React, { useEffect, useState } from "react";
import axios from "axios";

function FormPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [displaydatas, setDisplayDatas] = useState([]);

  function submitdatas() {
    const userData = { name, age: parseInt(age, 10) }; 
    axios.post("http://localhost:1122/insertdatas", userData)
      .then(() => { setMessage("Data inserted successfully");  setDisplayDatas((inserteddatas)=>[...inserteddatas,{name,age:parseInt(age,10)}]) })
      .catch((error) => { setMessage("Error inserting data: " + error.message); });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:1122/getdatas");
        setDisplayDatas(response.data.totaldatas);
      } catch (err) {
        setDisplayDatas("Error fetching data");
      }
    }
    fetchData();
  }, []);

  async function deletedatas(val){
    try{
      const response = await axios.delete(`http://localhost:1122/deletedatas/${val}`);
      setDisplayDatas((prevData) => prevData.filter((item) => item._id !== val));
      alert(response.data.message);
    }
    catch(err){
      alert("Error occur for deletion..");
    }
  }

  async function updatedatas(updval) {
    const userData = {name: updval.name,age: updval.age};
    try{
      await axios.put(`http://localhost:1122/updatedatas/${updval._id}}`,userData);
    }
    catch(err){
      alert("Error occur for updation..")
    }
  }



  return (
    <>
      <div>
        Name: <input type="text" placeholder="name.." onChange={(e) => setName(e.target.value)} />
        Age: <input type="number" placeholder="age.." onChange={(e) => setAge(e.target.value)} />
        Image : <input type="file" />
        <button onClick={submitdatas}>Submit Data</button>
      </div>
      {message && <div>{message}</div>}

      <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td>AGE</td>
          </tr>
        </thead>
        <tbody>
          {displaydatas.length > 0 ? (
            displaydatas.map((details) => (
              <tr>
                <td>{details.name}</td>
                <td>{details.age}</td>
                <td><button className="p-2" onClick={()=>deletedatas(details._id)} style={{backgroundColor:"red",color:"white"}}>Delete</button>
                    <button className="p-2" onClick={()=>updatedatas(details._id)} style={{backgroundColor:"blue",color:"white"}}>Update</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default FormPage;





