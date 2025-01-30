// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './actions';


// function Reduxpage() {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }

// export default Reduxpage;








// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setName,setAge } from './actions';

// function Reduxpage() {
//     const user = useSelector((state) => state.user);
//     const dispatch = useDispatch();

//     return (
//         <div>
//             <h2>Enter Your Details</h2>
//             <input 
//                 type="text" 
//                 placeholder="Enter name" 
//                 value={user.name}
//                 onChange={(e) => dispatch(setName(e.target.value))}
//             />
//             <br />
//             <input 
//                 type="number" 
//                 placeholder="Enter age" 
//                 value={user.age}
//                 onChange={(e) => dispatch(setAge(e.target.value))}
//             />
//             <br />
//             <h3>Preview:</h3>
//             <p>Name: {user.name}</p>
//             <p>Age: {user.age}</p>
//         </div>
//     );
// }

// export default Reduxpage;









import React from 'react';
import { useEffect,useState } from "react";


function Reduxpage(){

  const [totaldatas,settotaldatas] = useState([]);
  const [email,setemail] = useState("");
  const [username,setusername] = useState("");
  const [deletes,setdeletes] = useState("");

  useEffect(()=>{
    async function fetchdata(){
      try {
        const response = await fetch("https://fakestoreapi.com/users");
        const data = await response.json(); 
        settotaldatas(data); 
      } catch (err) {
        console.log("Error", err);
      }
    }
    fetchdata();
  },[]);


  function search(){
    const searchdatas = totaldatas.filter((value)=>value.email.includes(email));
    settotaldatas(searchdatas);
  }

  function filter(){
    const filtereddatas = totaldatas.filter((user)=>user.username.includes(username));
    settotaldatas(filtereddatas);
  }

  function deletedatas(){
    const deleteddatas = totaldatas.filter((user)=>user.username !== deletes);
    settotaldatas(deleteddatas);
  }


  return(
    <>

      Enter Email : <input type="text" placeholder="email" value={email} onChange={(email)=>setemail(email.target.value)} />   <button onClick={search}>Search</button>
      Enter Username : <input type="text" placeholder='username' value={username} onChange={(user)=>setusername(user.target.value)} />  <button onClick={filter}>Filter</button>
      Enter Email : <input type="text" placeholder="email" value={deletes} onChange={(email)=>setdeletes(email.target.value)} />   <button onClick={deletedatas}>Delete</button>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
            </thead>

            <tbody>
                    {totaldatas.map((totdatas)=>(
                      <tr>
                        <td>{totdatas.id}</td>
                        <td>{totdatas.email}</td>
                        <td>{totdatas.username}</td>
                        <td>{totdatas.password}</td>
                      </tr>
                    ))}
            </tbody>
        </table>
    </>
  )
}

export default Reduxpage;














// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setemail,setusername,setdeletes } from './actions'; // Import the actions

// function Reduxpage() {
//   const dispatch = useDispatch();
  
//   // Select state from Redux store
//   const totaldatas = useSelector(state => state.user.users);
//   const email = useSelector(state => state.user.email);
//   const username = useSelector(state => state.user.username);
//   const deletes = useSelector(state => state.user.deletes);

//   useEffect(() => {
//     async function fetchdata() {
//       try {
//         const response = await fetch("https://fakestoreapi.com/users");
//         const data = await response.json();
//         dispatch({ type: 'SET_USERS', payload: data }); // Assuming you also have action to set users in the store
//       } catch (err) {
//         console.log("Error", err);
//       }
//     }
//     fetchdata();
//   }, [dispatch]);

//   function search() {
//     const searchdatas = totaldatas.filter((value) => value.email.includes(email));
//     dispatch({ type: 'SET_EMAIL', Value: searchdatas }); // Update state with filtered data
//   }

//   function filter() {
//     const filtereddatas = totaldatas.filter((user) => user.username.includes(username));
//     dispatch({ type: 'SET_EMAIL', Value: filtereddatas }); // Update state with filtered data
//   }

//   function deletedatas() {
//     const deleteddatas = totaldatas.filter((user) => user.username !== deletes);
//     dispatch({ type: 'SET_EMAIL', Value: deleteddatas }); // Update state with filtered data
//   }

//   return (
//     <>
//       <div>
//         Enter Email: 
//         <input
//           type="text"
//           placeholder="email"
//           value={email}
//           onChange={(e) => dispatch(setemail(e.target.value))}
//         />
//         <button onClick={search}>Search</button>
//       </div>

//       <div>
//         Enter Username: 
//         <input
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e) => dispatch(setusername(e.target.value))}
//         />
//         <button onClick={filter}>Filter</button>
//       </div>

//       <div>
//         Enter Username to Delete: 
//         <input
//           type="text"
//           placeholder="username"
//           value={deletes}
//           onChange={(e) => dispatch(setdeletes(e.target.value))}
//         />
//         <button onClick={deletedatas}>Delete</button>
//       </div>

//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>EMAIL</th>
//             <th>USERNAME</th>
//             <th>PASSWORD</th>
//           </tr>
//         </thead>
//         <tbody>
//           {totaldatas.map((totdatas) => (
//             <tr key={totdatas.id}>
//               <td>{totdatas.id}</td>
//               <td>{totdatas.email}</td>
//               <td>{totdatas.username}</td>
//               <td>{totdatas.password}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default Reduxpage;