import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
const user=useSelector((store)=>store.user);

  return  user &&(
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <EditProfile user={user} />
    </div>
  );
};

export default Profile;
