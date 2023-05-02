import React, { useEffect, useState } from "react";
import "./createblog.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addpost } from "../../redux/Action";
import { toast } from "react-toastify";

export default function Createblog() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [sub, setSub] = useState("");
  const dispatch = useDispatch();
  const locale = "en";
  var today = new Date();
  const date = `  ${today.toLocaleDateString(locale, {
    month: "long",
  })} ${today.getDate()}, 2023\n\n`;
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  const imgs = (ele) => {
    const newlist = ele.map((ele) => {
      return ele.urls.small;
    });
    setImages(newlist);
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=coding&client_id=7dQXxXPcQFfpfkkjdklsYxp0mGWT9aviICNbI6N3vMQ"
    )
      .then((res) => res.json())
      .then((data) => {
        imgs(data.results);
      });
  }, []);
  return (
    <div className="createblog">
      <h1>New Post</h1>
      <div className="createblog_form">
        <input
          type="text"
          placeholder="Title"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <textarea
          rows="8"
          cols="30"
          placeholder="Subject"
          value={sub}
          onChange={(e) => {
            setSub(e.target.value);
          }}
        ></textarea>
        <div style={{ textAlign: "end" }}>
          <button
            className="createblog_button"
            onClick={() => {
              if (input.length !== 0 && sub.length !== 0) {
                toast.success("Post added to Homepage");
                dispatch(addpost(input, sub, date + time, images));
                navigate("/home");
              } else {
                toast.error("Title and Subject are mandatory");
              }
            }}
          >
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
}
