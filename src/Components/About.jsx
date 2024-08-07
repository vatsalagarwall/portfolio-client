import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [activeTab, setActiveTab] = useState("Education");

  const renderContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                <span style={{ color: "red" }}>Technical Skills: </span> • C •
                C++ • Python • JavaScript • MERN stack
              </li>
              <li>
                <span style={{ color: "red" }}>Other Skills:</span> • Firebase •
                MySQL
              </li>
              <li>
                <span style={{ color: "red" }}>Coursework:</span> • Database
                Management Systems • Data Structures and Algorithms •
                Object-Oriented Programming • Operating Systems • Computer
                Network
              </li>
            </ul>
          </div>
        );
      case "Experience":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                Web Development Intern at{" "}
                <u>
                  <Link
                    to="https://eplanetsoft.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    EPlanet Soft - EP SOFT Pvt. Ltd., Jaipur
                  </Link>
                </u>
                <br />
                <span style={{ fontSize: "smaller", color: "red" }}>
                  Sep 2023 – Dec 2023
                </span>
              </li>
              <li>
                Freelancer for Web Development
                <br />
                <span style={{ fontSize: "smaller", color: "red" }}>
                  May 2024 – June 2024
                </span>
              </li>
              <li>
                Member of Technical Team in Apple Developers Group
                <br />
                <span style={{ fontSize: "smaller", color: "red" }}>
                  Dec 2021 – present
                </span>
              </li>
            </ul>
          </div>
        );

      case "Education":
        return (
          <div className="text-white" style={{ marginTop: "10px" }}>
            <ul>
              <li>
                Vellore Institute of Technology, Vellore{" "}
                <span style={{ fontSize: "smaller" }}>
                  (B.Tech in Information Technology)
                </span>
                <br />
                <span
                  style={{
                    fontSize: "smaller",
                    color: "red",
                  }}
                >
                  Expected July 2025
                </span>
              </li>
              <li>
                Ryan International School, Jaipur{" "}
                <span style={{ fontSize: "smaller" }}>
                  (Secondary Education)
                </span>
                <br />
                <span
                  style={{
                    fontSize: "smaller",
                    color: "red",
                  }}
                >
                  2019-2020
                </span>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // <div
    //   className="container-fluid text-white p-4"
    //   style={{
    //     backgroundColor: "black",
    //     // marginLeft: "40px",
    //     // marginRight: "40px",
    //   }}
    // >
    <div
      className="container-fluid text-white p-4"
      style={{
        backgroundColor: "black",
        marginLeft: "auto", // Add left margin
        marginRight: "auto", // Add right margin
        maxWidth: "1200px", // Optionally set a maximum width for the content
      }}
    >
      <div className="row" style={{ marginTop: "60px", marginBottom: "60px" }}>
        {/* <div className="col-md-6">
          <img
            src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1705943351/WhatsApp_Image_2024-01-22_at_22.34.12_f160735d_mmzsbe.jpg"
            alt="About Image"
            className="img-fluid"
            style={{
              width: "60%",
              height: "85%",
              marginLeft: "70px",
              marginRight: "70px",
            }}
          />
        </div> */}

        <div className="col-md-6">
          <div style={{ marginRight: "40px", textAlign: "start" }}>
            <h2 className="heading">About Me</h2>
            <p className="text-wrap">
              As a dedicated college student, I'm passionate about coding, with
              a focus on software and web development. My academic journey has
              allowed me to showcase my skills through various projects. Active
              participation in clubs like the Apple Developers Group has honed
              my web design abilities and expanded my web development knowledge.
              My interest in technology has been a lifelong pursuit, motivating
              me to excel in this ever-evolving field.
            </p>
            <p>
              I'm confident in my abilities and eager to take on new challenges.
              I'm a team player, committed to achieving common goals. I believe
              I can make a significant contribution to any software development
              or web development team.
            </p>

            {/* Navigation Tabs */}
            <ul className="nav nav-underline text-white">
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Education" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Education")}
                  style={{
                    borderBottomColor:
                      activeTab === "Education" ? "red" : "transparent",
                  }}
                >
                  Education
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Skills" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Skills")}
                  style={{
                    borderBottomColor:
                      activeTab === "Skills" ? "red" : "transparent",
                  }}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link text-white ${
                    activeTab === "Experience" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Experience")}
                  style={{
                    borderBottomColor:
                      activeTab === "Experience" ? "red" : "transparent",
                  }}
                >
                  Experience
                </button>
              </li>
            </ul>
            {/* Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
