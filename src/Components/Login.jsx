import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        dispatch(addUser(res.data));
        navigate("/");
      }
    } catch (err) {
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

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { firstName, lastName, email, password },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      const errorResponse = err.response;

      if (errorResponse && errorResponse.status === 401) {
        setErrorMessage("Invalid email or password. Please try again.");
      } else if (errorResponse && errorResponse.status === 500) {
        setErrorMessage("Server error. Please try again later.");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 space-y-3 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          {isLoginForm ? "Login" : "Sign Up"}
        </h2>
        <div>
          {!isLoginForm && (
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-800">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input input-bordered w-full py-1 text-sm"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-800">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="input input-bordered w-full py-1 text-sm"
                />
              </div>
            </>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-800">Email ID</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full py-1 text-sm"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full py-1 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            {errorMessage && (
              <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
            )}
            <button
              onClick={isLoginForm ? handleLogin : handleSignUp}
              className="btn btn-primary w-full py-1 text-sm"
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="text-sm text-blue-600 text-center mt-2 cursor-pointer"
            onClick={() => setLoginForm((value) => !value)}
          >
            {isLoginForm ? "New User? Sign Up Here" : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
