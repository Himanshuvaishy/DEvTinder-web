import React, { useState } from "react";
import UserCard from "./userCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const InputField = ({ label, value, onChange, type = "text", placeholder = "" }) => (
  <div className="mb-1">
    <label className="block text-gray-700 text-sm font-medium mb-0.5">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="input input-bordered w-full"
      placeholder={placeholder}
    />
  </div>
);

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || 18);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender || "M");
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        { firstName, lastName, age, gender, about, photoUrl },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      console.log("Profile updated:", res.data);
    } catch (err) {
      const errorMsg = err.response?.data || "An unexpected error occurred.";
      setError(errorMsg);
      console.error("Error updating profile:", errorMsg);

      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
    }
  };

  return (
    <>
      <div className="flex gap-6">
        {/* Edit Profile Form */}
        <div className="w-full max-w-md p-3 bg-white shadow-lg rounded-lg flex-1">
          <h2 className="text-lg font-bold text-center text-gray-800 mb-2">Edit Profile</h2>
          <div className="form-control">
            <InputField label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <InputField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <InputField label="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <InputField label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            <InputField label="Photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />

            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-medium mb-0.5">About</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea textarea-bordered w-full"
                rows="2"
                placeholder="Tell us about yourself"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full" onClick={saveProfile}>Save Profile</button>
          </div>
        </div>

        {/* User Card */}
        <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} className="w-full max-w-md p-3 bg-white shadow-lg rounded-lg flex-1" />
      </div>

      {/* Toasts */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white p-4 rounded shadow-lg">Profile saved successfully</div>
        </div>
      )}
      {showErrorToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-red-500 text-white p-4 rounded shadow-lg">{error || "An error occurred"}</div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
