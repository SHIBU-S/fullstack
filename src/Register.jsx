

import {React} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from "react";

const Form = () => {
    const { register, handleSubmit } = useForm();



    const handleRegistration = data => {
        console.log(data);

        let val = JSON.stringify(data)
            console.log("Val:",val);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(val)
        fetch('http://localhost:8000/register', {
            method: 'POST',
            headers: headers,
            body: val
        }).then((response) => {
            response.json();
        }).then((data) => {
            alert(data.message);
        })
        alert("data submited")
    };

    // const update = () => {
    //     let oldname = { upname: window.prompt("enter name to update their age...") }
    //     let newage = { upage: window.prompt("enter age change in DB") }
    //     let data = { valname: oldname, valage: newage }
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let val = JSON.stringify(data)
    //     console.log(val)
    //     fetch('http://localhost:5003/update', {
    //         method: 'POST',
    //         headers: headers,
    //         body: val
    //     })
    // }

    // const del = () => {
    //     let data = prompt("enter name to delete data in database")
    //     console.log(data);

    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     let val = JSON.stringify({ name: data })
    //     console.log(val)
    //     fetch('http://localhost:5003/del', {
    //         method: 'POST',
    //         headers: headers,
    //         body: val
    //     })
    // }

    // const Showval = () => {

    //     const response = axios.get('http://localhost:5003/showval').then(
    //         (response) => {
    //             var result = response.data;
    //             console.log(result);
    //         },
    //         (error) => {
    //             console.log(error);
    //         }
    //     );
    // }


    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)} enctype="multipart/form-data">
                <div>
                    <label>Name</label>
                    <input name="name" {...register('name')} required />
                </div>
                <br />
                <div>
                    <label>Email</label>
                    <input type="email" name="email" {...register('email')} required />
                </div>
                <br />
                <div>
                    <label>Password</label>
                    <input type="password" name="password" {...register('password')} required />
                </div>
                <br />
                <label >age</label>
                <input type='number' name='age' {...register('age')} />
                <br />
                <br />
                <button type="submit">register</button>
            </form>
        </div>
    );
};

export default Form;



// import { useForm } from "react-hook-form";


// function Form(){
//     const {register,handleSubmit} = useForm();

//     function handleRegistration(data){
//         const headers = new Headers();
//             headers.append('Content-type','application/json');
//         const value = JSON.stringify(data);

//         fetch("http://localhost:8000/register",{
//             method : "POST",
//             headers : headers,
//             body : value
//         })
//         .then((response) => {    response.json();     })
//         .then((data) =>     {    alert(data.message); })
            
//         alert("Data submited sucessfully..");
//     }

//     return(
//         <>
//             <form onSubmit={handleSubmit(handleRegistration)} enctype="multipart/form-data">
                
//             Name :      <input type="text" name="name" {...register('name')} />
//             Email :     <input type="email" name="email" {...register('email')} />
//             Password :  <input type="password" name="password" {...register('password')} />
//             Age :       <input type="number" name="age" {...register('age')} />

//                 <button>Register</button>
//             </form>
//         </>
//     )
// }

// export default Form;