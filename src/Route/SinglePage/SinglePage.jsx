import React, { useContext } from "react";
import { singlePostData, userData } from "../../Lib/dummydata";
import "./SinglePage.scss";
import Slider from "../../Componants/slider/Slider";
import Map from "../../Componants/Map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../Lib/apiRequest";
import { useSelector } from "react-redux";

const SinglePage = () => {
  const postdata = useLoaderData();
  //console.log(postdata);
  //const { currentUser } = useContext(AuthContext);
  const currentUser = useSelector(state=>state.currentUser) 
  const [saved, setSaved] = useState(postdata.isSaved);
  console.log(saved)
  const handleClick = async () => {
    try {
      const res = await apiRequest.post("./users/save", {
        userId: currentUser.id,
        postId: postdata.id,
      });
  
      setSaved(!saved);
      
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={postdata.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{postdata.title}</h1>
                <div className="addresss">
                  <img src="/pin.png" alt="" />
                  <span>{postdata.address}</span>
                </div>
                <span className="price">${postdata.price}</span>
              </div>

              <div className="user">
                <img src={postdata.user.avatar} alt="" />
                <span>{postdata.user.username}</span>
              </div>
            </div>

            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(postdata.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">Genral</p>
          <div className="verticalList">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>
                  {postdata.postDetail.utilities == "tenant"
                    ? "tenant is responsible"
                    : "owner is reposnible"}
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>

          <p className="sizeName">Sizes</p>
          <div className="sizes">
            <div className="sizeItems">
              <img src="./fee.png" alt="" />
              <span>{postdata.postDetail.size} sqft</span>
            </div>
            <div className="sizeItems">
              <img src="./bed.png" alt="" />
              <span>2 bedRooms</span>
            </div>
            <div className="sizeItems">
              <img src="./bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>

          <p style={{ fontWeight: "bold" }}>Nearby Places</p>
          <div className="nearbyCont">
            <div className="neaybyItem">
              <img src="./school.png" alt="" />
              <div className="subitem">
                <p>School</p>
                <span>{postdata.postDetail.school}m away</span>
              </div>
            </div>
            <div className="neaybyItem">
              <img src="./bus.png" alt="" />
              <div className="subitem">
                <p>Bus Stop</p>
                <span>200m away</span>
              </div>
            </div>
            <div className="neaybyItem">
              <img src="./fee.png" alt="" />
              <div className="subitem">
                <p>Restuarant</p>
                <span>{postdata.postDetail.restaurant}m away</span>
              </div>
            </div>
          </div>

          <p className="location">Location</p>
          <div className="mapP">
            <Map item={[postdata]} />
          </div>

          <div className="button">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button
              onClick={handleClick}
              style={
                saved
                  ? { backgroundColor: "yellow" }
                  : { backgroundColor: "white" }
              }
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
