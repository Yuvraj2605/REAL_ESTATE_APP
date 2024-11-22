import React, { useContext, useEffect, useState } from "react";
import "./ProfilePage.scss";
import List from "../../Componants/List/List";
import Chat from "../../Componants/chat/Chat";
import apiRequest from "../../Lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { currentUser,updateFun} = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");
      updateFun(null);
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };
  
  //const [getUserPosts,setgetUserPosts] = useState({});
  const [userPosts,setuserPosts] = useState([])
  useEffect(()=>{
    const getUserPost = async()=>{
     try{
          const res = await apiRequest.get('/users/profilePosts')
         setuserPosts(res.data.userPosts);
     }catch(err){
      console.log(err)
     } 
  }

  getUserPost();
  },[])

  // console.log(getUserPosts.userPosts)
  
  return (
    <div className="profile">
      <div className="left">
        <div className="wrapper">
          <div className="userHeading">
            <h1>User Information</h1>
            <Link to="/profile/update">
            <button>Update Profile</button>
            </Link>
          </div>

          <div className="userDetails">
            <div className="avatar">
              Avatar:
              <img src={currentUser.avatar || "./public/noavatar.jpg"} alt="" />
            </div>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              email: <b>{currentUser.email}</b>
            </span>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <div className="lists">
            <div className="header">
              <h1>My List</h1>
              <Link to="/addPost">
              <button>Create new post</button>
              </Link>
            </div>
            <List listData={userPosts}/>
          </div>
          <div className="lists">
            <div className="header">
              <h1>My List</h1>
              <Link to="/addPost">
              <button>Create new post</button>
              </Link>
            </div>
            <List listData={userPosts}/>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
