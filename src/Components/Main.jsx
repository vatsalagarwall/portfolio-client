import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const mainStyle = {
  // backgroundImage: `url(https://img.freepik.com/free-vector/stream-binary-code-design_53876-97406.jpg)`,
  backgroundColor: "black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
};

function Main() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={mainStyle}>
        <div className="container d-flex flex-column align-items-center vh-100">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "black" }}
          >
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ marginLeft: 0 }} // Align the icon to the left
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
                  <li className="nav-item flex-grow-1 text-center">
                    <button
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#home"
                    >
                      Home
                    </button>
                  </li>
                  <li className="nav-item flex-grow-1 text-center">
                    <button
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#about"
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item flex-grow-1 text-center">
                    <button
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="nav-item flex-grow-1 text-center">
                    <button
                      className="nav-link active text-white"
                      aria-current="page"
                      href="#"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container d-flex justify-content-center align-items-center flex-grow-1">
            <div className="row w-100">
              <div className="col-md-6 text-center">
                <p className="heading-next">Full Stack Web Developer</p>
                <h1 className="heading">
                  Hi, I'm{" "}
                  <span style={{ color: "#2a52be" }}>Vatsal Agarwal</span>
                </h1>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1716797105/image_qtht1n.png"
                  alt="About Image"
                  className="img-fluid"
                  style={{
                    width: "300px",
                    height: "300px",
                    border: "5px solid #2a52be",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Main;
