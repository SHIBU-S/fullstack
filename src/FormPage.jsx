

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




import axios from "axios";
import { useEffect,useState } from "react";

function FormPage(){

  const [name,setname] = useState("");
  const [image,setimage] = useState(null);

  const [details,setdetails] = useState([]);
  const [editData, setEditData] = useState(null);

  function submitdatas(){

    const formdatas = new FormData();
    formdatas.append("Name",name);
    formdatas.append("Image",image);

    if(editData){
      axios
      .put(`http://localhost:1999/UpdateDatas/${editData.id}`, formdatas) // Use PUT for updating
      .then(() => {
        alert("Data successfully updated");
        fetchdata(); // Refresh the list of data
        resetForm(); // Reset the form after update
      })
      .catch((err) => alert("Update error", err));
    }
    else{
      axios.post("http://localhost:1999/InsertDatas",formdatas)
      .then(()=>alert("Datas successfully inserted"))
      .catch((err)=>alert("Insertion error",err));
    }
  }

  function editdatas(data) {
    setEditData(data); // Set the selected data for editing
    setname(data.Name);
    setimage(null); 
  }
  const deletedatas = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      axios
        .delete(`http://localhost:1999/DeleteDatas/${id}`)
        .then(() => {
          alert("Data successfully deleted");
          setdetails((prev) => prev.filter((data) => data.id !== id)); // Filter out the deleted item
        })
        .catch((err) => alert("Deletion error: " + err.message));
    }
  };
  


  useEffect(()=>{
    async function fetchdata() {
      try{
        const response = await axios.get("http://localhost:1999/GetDatas");
        setdetails(response.data.totaldatas)
      }
      catch(err){
        alert("Fetching Problem",err);
      }
    }
    fetchdata();
  },[]);

  return(
    <>
        Name : <input type="text" value={name} onChange={(e)=>setname(e.target.value)}  placeholder="name" />  <br />
        Image : <input type="file" name="Image" onChange={(e)=>setimage(e.target.files[0])} />

        <button onClick={submitdatas}>Submit Datas</button>

        <table>
          <thead>
              <tr>
                <th>NAME</th>
                <th>IMAGE</th>
                <th>ACTIONS</th>
              </tr>
          </thead>

            <tbody>
              {details.length>0 ? (
                details.map((data)=>(
                  <tr>
                     <td>{data.Name}</td> 
                     <td><img src={data.Image} alt="" style={{ width: '50px' }} /></td> 
                     <td><button className="px-3 bg-primary border border-none text-white" onClick={()=>editdatas(data)} >Edit</button>
                     <button className="px-3 bg-danger border border-none text-white" onClick={()=>deletedatas(data)} >Delete</button></td>
                  </tr>
                  ))
                ) : (<p>No Datas</p>)}
            </tbody>
        </table>
    </>
  )
}

export default FormPage;