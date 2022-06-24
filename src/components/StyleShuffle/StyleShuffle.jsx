import React, { useState } from "react";
import img1 from "../../images/style_shuffle/1.jpg";
import img2 from "../../images/style_shuffle/2.jpg";
import img3 from "../../images/style_shuffle/3.jpg";
import img4 from "../../images/style_shuffle/4.jpg";
import img5 from "../../images/style_shuffle/5.jpg";
// import end from "../../images/style_shuffle/end_card.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as End } from "../../images/style_shuffle/end_card.svg";
import "./styleshuffle.css";
import { Link } from 'react-router-dom'
import * as $ from "jquery";

const images = [img1, img2, img3, img4, img5];

export default function StyleShuffle() {
  const [currentId, setCurrentId] = useState(0);
  const dislike = () => {
    const id = $(".activeStyle").attr("data-id");
    let nextId = Number(id) + 1;
    setCurrentId(nextId);
    $(".activeStyle").addClass("dislike");
    setTimeout(() => {
      $(`.style-${id}`).removeClass("activeStyle");
      setTimeout(() => {
        $(`.style-${nextId}`).addClass("activeStyle");
      });
    }, 500);
  };

  const like = () => {
    const id = $(".activeStyle").attr("data-id");
    let nextId = Number(id) + 1;
    setCurrentId(nextId);
    $(".activeStyle").addClass("like");
    setTimeout(() => {
      $(`.style-${id}`).removeClass("activeStyle");
      setTimeout(() => {
        $(`.style-${nextId}`).addClass("activeStyle");
      });
    }, 500);
  };

  return (
    <div id="styleShuffle">
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="offset-lg-2 col-lg-4 col-12 left">
            <h2 className="header">Let's get to know each other</h2>
            <p className="content">
              By rating outfits, you will help us understand your one-of-a-kind
              style.
            </p>
          </div>
          <div className="col-lg-6 col-12 right">
            <div className="styleShuffle">
              <div className="card">
                {currentId < images.length && (
                  <>
                    <p className="name">STYLE SHUFFLE</p>
                    <h5 className="header">Would you wear this?</h5>
                  </>
                )}
                {currentId < images.length ? (
                  <div className="images">
                    {images.map((image, index) => {
                      return (
                        <img
                          data-id={index}
                          key={index}
                          src={image}
                          alt=""
                          className={`style-${index} ${
                            index == 0 ? "activeStyle" : ""
                          }`}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="endOfStyleShuffle">
                    <div className="images">
                      <End></End>
                    </div>
                    <p>Great picks so far. Ready for the next step?</p>
                    <Link to="/quiz">Take your style quiz</Link>
                  </div>
                )}
                {currentId < images.length && (
                  <div className="buttonHolder">
                    <button>
                      <FontAwesomeIcon
                        onClick={dislike}
                        className="icon"
                        icon={faThumbsDown}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        onClick={like}
                        className="icon"
                        icon={faThumbsUp}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
