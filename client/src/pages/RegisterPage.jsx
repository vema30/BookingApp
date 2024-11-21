import React from 'react';
import { Link } from 'react-router-dom';
import IndexPage from './IndexPage';
import { useState } from "react";
import axios from "axios";
const RegisterPage = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [username,setUsername]=useState('');
   const handleClick= async(event)=>{
    event.preventDefault();
       console.log({email,password,username});
       const postData = {
        email,
        password,
        username,
    };

    try {
      const response = await axios.post("http://localhost:3001/api/v1/register", postData);
      console.log("Response from server:", response.data);
      alert("User registered successfully!");
  } catch (error) {
      console.error("Error while registering:", error.response ? error.response.data : error.message);
      alert("Failed to register user.");
  };

       
   }
  return (
   <div >
   <IndexPage/>
   
   <div className="w-screen h-screen  flex flex-col justify-center items-center">
   
   {/* Title */}
   <h1 className="font-bold text-5xl text-black mb-10">Register</h1>

   {/* Form Container */}
   <div className="bg-yellow-200 w-full max-w-md rounded-lg shadow-lg p-8">
     <form className="space-y-6">
       {/* Email Input */}
       <div>
         <label
           htmlFor="email"
           className="block text-sm font-medium text-gray-700"
         >
           Email
         </label>
         <input
           id="email"
           type="email"
           onChange={event => setEmail(event.target.value)}

           placeholder="Enter your email"
           className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
           required
         />
       </div>
       <div>
       <label
         htmlFor="username"
         className="block text-sm font-medium text-gray-700"
       >
         username
       </label>
       <input
         id="username"
         type="text"
         onChange={event => setUsername(event.target.value)}

         placeholder="Enter your username"
         className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
         required
       />
     </div>
       {/* Password Input */}
       <div>
         <label
           htmlFor="password"
           className="block text-sm font-medium text-gray-700"
         >
           Password
         </label>
         <input
           id="password"
           type="password"
           onChange={event => setPassword(event.target.value)}

           placeholder="Enter your password"
           className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
           required

         />
       </div>

       {/* Signup Button */}
       <div className="text-center">
         <button
         onClick={handleClick}
           type="submit"
           className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
         >
           Sign Up
         </button>
       </div>
       <div>
       <p>All ready have an account ? <Link to="/login"><span className='text-blue-400'>login</span></Link></p>
       </div>
     </form>
   </div>
 </div>
   </div>
  );
};

export default RegisterPage;
