import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home.css";
import { FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { readpost } from "../../redux/Action";

export default function Home() {
  const dispatch = useDispatch();
  const { userdata, homedata } = useSelector((data) => data);
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="postbutton">
        <h1>MyBlogs</h1>
        <button
          className="newpostbutton"
          onClick={() => {
            navigate("/createblog");
          }}
        >
          Create newPost
        </button>
      </div>

      <div className="tiles">
        {homedata.length > 0 ? (
          homedata.map((ele) => {
            return (
              <div
                className="tile"
                onClick={() => {
                  dispatch(readpost(ele));
                  navigate("/readblog");
                }}
              >
                <div>
                  <img src={ele.image} className="backimage" alt="" />
                  <img
                    src={
                      userdata.length > 0 ? userdata[0].avatar_url : "loading"
                    }
                    width={50}
                    height={50}
                    className="logo"
                    alt=""
                  ></img>
                </div>
                <div className="title_des">
                  <h3>{ele.title}</h3>
                  <p>{ele.description}</p>
                </div>
                <div className="user">
                  <h5>
                    <FaUser />{" "}
                    {userdata.length > 0 ? userdata[0].login : "loading"}
                  </h5>
                  <h5>
                    <SlCalender /> {ele.id}
                  </h5>
                </div>
              </div>
            );
          })
        ) : (
          <h1>data is loading...</h1>
        )}
      </div>
    </div>
  );
}
