import React, { useState } from "react";
import "./footer.css";
import UK from "../../images/flags/UK.png";
import USA from "../../images/flags/USA.png";
import ios from "../../images/helpers/ios.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/fontawesome-free-brands";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const lang = [
  {
    id: 1,
    flag: USA,
    name: "United States",
  },
  {
    id: 2,
    flag: UK,
    name: "United Kingdom",
  },
];

const footer_content = [
  {
    heading: "The Service",
    contents: [
      {
        name: "Gift Cards",
        link: "/",
      },
      {
        name: "Iphone App",
        link: "/",
      },
      {
        name: "Plus Sizes",
        link: "/",
      },
      {
        name: "Maternity",
        link: "/",
      },
      {
        name: "Petite",
        link: "/",
      },
      {
        name: "Big & Tall",
        link: "/",
      },
      {
        name: `Women's Jeans`,
        link: "/",
      },
      {
        name: "Business Casual",
        link: "/",
      },
    ],
  },
  {
    heading: "The Company",
    contents: [
      {
        name: "About Us",
        link: "/",
      },
      {
        name: "Social Impact",
        link: "/",
      },
      {
        name: `Women's Blog`,
        link: "/",
      },
      {
        name: `Men's Jeans`,
        link: "/",
      },
      {
        name: "Press",
        link: "/",
      },
      {
        name: "Investor Relations",
        link: "/",
      },
      {
        name: "Careers",
        link: "/",
      },
      {
        name: "Tech Blog",
        link: "/",
      },
    ],
  },
  {
    heading: "Questions",
    contents: [
      {
        name: "FAQ",
        link: "/",
      },
      {
        name: "Help",
        link: "/",
      },
      {
        name: "Returns",
        link: "/",
      },
    ],
  },
];

function Footer() {
  const [flag, setFlag] = useState(USA);
  const [visibility, setVisibility] = useState(false);

  const changeFlag = (e) => {
    setFlag(e.currentTarget.value);
  };

  const expandFooter = () => {
    setVisibility(!visibility);
  };

  return (
    <footer>
      <div className="container web">
        <hr />
        <div className="upperFooter">
          <div className="row">
            <div className="col-md-3">
              <div className="logoHolder">
                <h3>STITCH FIX</h3>
              </div>
              <div className="langHolder">
                <div className="flag">
                  <img src={flag} alt="" />
                </div>
                <div className="selectWrapper">
                  <select onChange={changeFlag}>
                    {lang.map((l) => {
                      return (
                        <option key={l.id} value={l.flag}>
                          {l.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="platformHolder">
                <a href="/">
                  <img src={ios} alt="" />
                </a>
              </div>
            </div>
            {footer_content.map((content, index) => {
              return (
                <div key={index} className="col-md-2 footerNavigation">
                  <h6>{content.heading}</h6>
                  <ul>
                    {content.contents.map((c, index) => {
                      return (
                        <li key={index}>
                          <a href={c.link}>{c.name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className="col-md-3 socialMedia">
              <div className="holder">
                <ul>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon size="2x" icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon size="2x" icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon size="2x" icon={faPinterest} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon size="2x" icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FontAwesomeIcon size="2x" icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="lowerFooter">
          <div className="row">
            <div className="col-md-4">
              <p>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
            </div>
            <div className="col-md-8">
              <div className="navigation">
                <a href="/">Terms of Use</a>-<a href="/">Privacy Policy</a>-
                <a href="/">Supply chain Information</a>-
                <a href="/">Ad choices</a>-<a href="/">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mobile">
        <div className="row">
          <div className="col-12">
            <div className="langHolder">
              <div className="flag">
                <img src={flag} alt="" />
              </div>
              <div className="selectWrapper">
                <select onChange={changeFlag}>
                  {lang.map((l) => {
                    return (
                      <option key={l.id} value={l.flag}>
                        {l.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="expandFooter">
            <div className="textHolder" onClick={expandFooter}>
              <p>More Info</p>
              {visibility ? (
                <span className="minus">
                  <FontAwesomeIcon icon={faMinus} />
                </span>
              ) : (
                <span className="plus">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              )}
            </div>
          </div>
        </div>
        {visibility ? (
          <div className="upperFooter">
            <div className="row" style={{ justifyContent: "center" }}>
              {footer_content.map((content, index) => {
                return (
                  <div key={index} className="col-4 footerNavigation">
                    <div className="navHolder">
                      <h6>{content.heading}</h6>
                      <ul>
                        {content.contents.map((c, index) => {
                          return (
                            <li key={index}>
                              <a href={c.link}>{c.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr />
            <div className="row" style={{ justifyContent: "center" }}>
              <div className="col-4 socialMedia">
                <div className="holder">
                  <ul>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon size="2x" icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon size="2x" icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon size="2x" icon={faPinterest} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon size="2x" icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <FontAwesomeIcon size="2x" icon={faYoutube} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="col-4"
                style={{ justifyContent: "center", display: "flex" }}
              >
                <div className="platformHolder">
                  <a href="/">
                    <img src={ios} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="lowerFooter">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-12">
              <p>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
            </div>
            <div className="col-12">
              <div className="navigation">
                <a href="/">Terms of Use</a>-<a href="/">Privacy Policy</a>-
                <a href="/">Supply chain Information</a>-
                <a href="/">Ad choices</a>-<a href="/">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
