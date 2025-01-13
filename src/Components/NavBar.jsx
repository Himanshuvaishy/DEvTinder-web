import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

   const userDetail=useSelector((store)=> store.user);

   const handleLogout= async ()=>{
    await axios.post(BASE_URL+"/logout",{}, {withCredentials:true }); 
    dispatch(removeUser());
   
    navigate("/login");


   }

   
  return (
    <div className="navbar top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">👨‍💻 DevTinder</Link>
      </div>
      { userDetail &&
      <div className="flex-none gap-2 mx-5">
          <b>Welcome {userDetail.firstName}</b>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User photo"
                src={userDetail.photoUrl}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" text-gray-500 menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link  to="/profile"className="justify-between ">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
       }
    </div>
  );
};

export default NavBar;
