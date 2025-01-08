import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {
const [email,setEmail]=useState("damini@gmail.com");
const [password,setPassword]=useState("Damini@1234");
 const dispatch=useDispatch();
 const navigate=useNavigate();


const handleLogin= async ()=>{
    
try{
 const res = await  axios.post(BASE_URL+"/login",
        {
            email,
            password

        },
        {
           withCredentials:true 
        }
     );
     console.log(res.data.photoUrl);
     dispatch(addUser(res.data));
     navigate("/");
     
     

    }catch(err){
        console.log(err);
    }

}



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email ID </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
             
            />
          </div>
          <div className="mt-6">
            <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login