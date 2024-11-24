import React, { useContext, useState } from "react";
import "./UpdateProfile.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../Componants/uploadWidget/UploadWidget";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/userSilce";

const UpdateProfile = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  //const { currentUser, updateFun } = useContext(AuthContext); 
  const currentUser = useSelector(state=>state.currentUser) 
  const [avatar, setAvatar] = useState([]);
  // console.log(avatar)
  const dispatch =  useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar:avatar[0]
      });
      const data= res.data;
     dispatch(updateUser(data));
      navigate("/profile");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;
