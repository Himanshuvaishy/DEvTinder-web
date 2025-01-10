import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {
const [email,setEmail]=useState("damini@gmail.com");
const [password,setPassword]=useState("Damini@1234");
const [errorMessage,setErrorMessage]=useState("");
 const dispatch=useDispatch();
 const navigate=useNavigate();


 const handleLogin = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/login`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    if (res.status === 200) {
      // Login successful
      dispatch(addUser(res.data));
      navigate("/");
    }
  } catch (err) {
    // Handle error based on the status code
    const errorResponse = err.response;

    if (errorResponse && errorResponse.status === 401) {
      setErrorMessage("Invalid email or password. Please try again.");
    } else if (errorResponse && errorResponse.status === 500) {
      setErrorMessage("Server error. Please try again later.");
    } else {
      setErrorMessage("Something went wrong. Please try again.");
    }

    console.error(err);
  }
};




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
          {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
            <button onClick={handleLogin} className="btn btn-primary w-full">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login