// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import About from "./About";
// // // import Projects from "./Projects";
// // // import Contact from "./Contact";
// // // import TypeWriter from "./TypeWriter";

// // // const mainStyle = {
// // //   backgroundColor: "black",
// // //   backgroundSize: "cover",
// // //   backgroundPosition: "center",
// // //   color: "white",
// // // };

// // // const texts = [
// // //   "Hello, My name is Vatsal Agarwal",
// // //   "I am a Full Stack Web Developer",
// // // ];

// // // function Main() {
// // //   return (
// // //     <div style={{ backgroundColor: "black" }}>
// // //       <div style={mainStyle}>
// // //         <div className="container d-flex flex-column align-items-center vh-100">
// // //           <nav
// // //             className="navbar navbar-expand-lg"
// // //             style={{ backgroundColor: "black", marginTop: "10px" }}
// // //           >
// // //             <div className="container-fluid">
// // //               <button
// // //                 className="navbar-toggler"
// // //                 type="button"
// // //                 data-bs-toggle="collapse"
// // //                 data-bs-target="#navbarSupportedContent"
// // //                 aria-controls="navbarSupportedContent"
// // //                 aria-expanded="false"
// // //                 aria-label="Toggle navigation"
// // //                 style={{ marginLeft: 0 }}
// // //               >
// // //                 <span className="navbar-toggler-icon"></span>
// // //               </button>
// // //               <div
// // //                 className="collapse navbar-collapse"
// // //                 id="navbarSupportedContent"
// // //               >
// // //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
// // //                   <li className="nav-item flex-grow-1 text-center">
// // //                     <button
// // //                       className="nav-link active text-white"
// // //                       aria-current="page"
// // //                       href="#home"
// // //                     >
// // //                       Home
// // //                     </button>
// // //                   </li>
// // //                   <li className="nav-item flex-grow-1 text-center">
// // //                     <button
// // //                       className="nav-link active text-white"
// // //                       aria-current="page"
// // //                       href="#about"
// // //                     >
// // //                       About
// // //                     </button>
// // //                   </li>
// // //                   <li className="nav-item flex-grow-1 text-center">
// // //                     <button
// // //                       className="nav-link active text-white"
// // //                       aria-current="page"
// // //                       href="#"
// // //                     >
// // //                       Projects
// // //                     </button>
// // //                   </li>
// // //                   <li className="nav-item flex-grow-1 text-center">
// // //                     <button
// // //                       className="nav-link active text-white"
// // //                       aria-current="page"
// // //                       href="#"
// // //                     >
// // //                       Contact
// // //                     </button>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           </nav>
// // //           <div className="container d-flex justify-content-center align-items-center flex-grow-1">
// // //             <div className="row w-100">
// // //               <div className="col-md-6 text-center">
// // //                 <div className="typewriter-container">
// // //                   <h1 className="heading">
// // //                     <TypeWriter
// // //                       texts={texts}
// // //                       speed={100}
// // //                       delayBetweenTexts={2000}
// // //                     />
// // //                   </h1>
// // //                 </div>
// // //               </div>
// // //               <div className="col-md-6 text-center">
// // //                 <img
// // //                   src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1716797105/image_qtht1n.png"
// // //                   alt="About Image"
// // //                   className="img-fluid"
// // //                   style={{
// // //                     width: "350px",
// // //                     height: "350px",
// // //                     border: "5px solid white",
// // //                     borderRadius: "50%",
// // //                     objectFit: "cover",
// // //                   }}
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <About />
// // //       <Projects />
// // //       <Contact />
// // //     </div>
// // //   );
// // // }

// // // export default Main;

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import About from "./About";
// // import Projects from "./Projects";
// // import Contact from "./Contact";
// // import TypeWriter from "./TypeWriter";

// // const mainStyle = {
// //   backgroundColor: "black",
// //   backgroundSize: "cover",
// //   backgroundPosition: "center",
// //   color: "white",
// // };

// // const texts = [
// //   "Hello, My name is Vatsal Agarwal",
// //   "I am a Full Stack Web Developer",
// // ];

// // function Main() {
// //   return (
// //     <div style={{ backgroundColor: "black" }}>
// //       <div style={mainStyle}>
// //         <div className="container d-flex flex-column align-items-center vh-100">
// //           <nav
// //             className="navbar navbar-expand-lg"
// //             style={{ backgroundColor: "black", marginTop: "10px" }}
// //           >
// //             <div className="container-fluid">
// //               <button
// //                 className="navbar-toggler"
// //                 type="button"
// //                 data-bs-toggle="collapse"
// //                 data-bs-target="#navbarSupportedContent"
// //                 aria-controls="navbarSupportedContent"
// //                 aria-expanded="false"
// //                 aria-label="Toggle navigation"
// //                 style={{ marginLeft: 0 }}
// //               >
// //                 <span className="navbar-toggler-icon"></span>
// //               </button>
// //               <div
// //                 className="collapse navbar-collapse"
// //                 id="navbarSupportedContent"
// //               >
// //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
// //                   <li className="nav-item flex-grow-1 text-center">
// //                     <button
// //                       className="nav-link active text-white"
// //                       aria-current="page"
// //                       href="#home"
// //                     >
// //                       Home
// //                     </button>
// //                   </li>
// //                   <li className="nav-item flex-grow-1 text-center">
// //                     <button
// //                       className="nav-link active text-white"
// //                       aria-current="page"
// //                       href="#about"
// //                     >
// //                       About
// //                     </button>
// //                   </li>
// //                   <li className="nav-item flex-grow-1 text-center">
// //                     <button
// //                       className="nav-link active text-white"
// //                       aria-current="page"
// //                       href="#"
// //                     >
// //                       Projects
// //                     </button>
// //                   </li>
// //                   <li className="nav-item flex-grow-1 text-center">
// //                     <button
// //                       className="nav-link active text-white"
// //                       aria-current="page"
// //                       href="#"
// //                     >
// //                       Contact
// //                     </button>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </nav>
// //           <div className="container d-flex justify-content-center align-items-center flex-grow-1">
// //             <div className="row w-100">
// //               <div className="col-md-6 text-center">
// //                 <div className="typewriter-container">
// //                   <h1 className="heading">
// //                     <TypeWriter
// //                       texts={texts}
// //                       speed={100}
// //                       delayBetweenTexts={2000}
// //                     />
// //                   </h1>
// //                 </div>
// //               </div>
// //               <div className="col-md-6 text-center">
// //                 <img
// //                   src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1716797105/image_qtht1n.png"
// //                   alt="About Image"
// //                   className="img-fluid"
// //                   style={{
// //                     width: "350px",
// //                     height: "350px",
// //                     border: "5px solid white",
// //                     borderRadius: "50%",
// //                     objectFit: "cover",
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <About />
// //       <Projects />
// //       <Contact />
// //     </div>
// //   );
// // }

// // export default Main;

// import React from "react";
// import { Link } from "react-router-dom";
// import About from "./About";
// import Projects from "./Projects";
// import Contact from "./Contact";
// import TypeWriter from "./TypeWriter";

// const mainStyle = {
//   backgroundColor: "black",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
//   color: "white",
// };

// const texts = ["Vatsal Agarwal", "a Full Stack Web Developer"];

// function Main() {
//   return (
//     <div style={{ backgroundColor: "black" }}>
//       <div style={mainStyle}>
//         <div className="container d-flex flex-column align-items-center vh-100">
//           <nav
//             className="navbar navbar-expand-lg"
//             style={{ backgroundColor: "black", marginTop: "10px" }}
//           >
//             <div className="container-fluid">
//               <button
//                 className="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//                 style={{ marginLeft: 0 }}
//               >
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarSupportedContent"
//               >
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100">
//                   <li className="nav-item flex-grow-1 text-center">
//                     <button
//                       className="nav-link active text-white"
//                       aria-current="page"
//                       href="#home"
//                     >
//                       Home
//                     </button>
//                   </li>
//                   <li className="nav-item flex-grow-1 text-center">
//                     <button
//                       className="nav-link active text-white"
//                       aria-current="page"
//                       href="#about"
//                     >
//                       About
//                     </button>
//                   </li>
//                   <li className="nav-item flex-grow-1 text-center">
//                     <button
//                       className="nav-link active text-white"
//                       aria-current="page"
//                       href="#"
//                     >
//                       Projects
//                     </button>
//                   </li>
//                   <li className="nav-item flex-grow-1 text-center">
//                     <button
//                       className="nav-link active text-white"
//                       aria-current="page"
//                       href="#"
//                     >
//                       Contact
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//           <div className="container d-flex justify-content-center align-items-center flex-grow-1">
//             <div className="row w-100">
//               <div className="col-md-6 text-center">
//                 <div className="typewriter-container">
//                   <h1 className="heading">
//                     Hello, I'm
//                     <TypeWriter
//                       texts={texts}
//                       speed={100}
//                       delayBetweenTexts={2000}
//                     />
//                   </h1>
//                 </div>
//               </div>
//               <div className="col-md-6 text-center">
//                 <img
//                   src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1716797105/image_qtht1n.png"
//                   alt="About Image"
//                   className="img-fluid"
//                   style={{
//                     width: "350px",
//                     height: "350px",
//                     border: "5px solid white",
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default Main;

import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import TypeWriter from "./TypeWriter";

const mainStyle = {
  backgroundColor: "black",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
};

const texts = ["Vatsal Agarwal", "a Full Stack Web Developer"];

function Main() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={mainStyle}>
        <div className="container d-flex flex-column align-items-center vh-100">
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "black", marginTop: "10px" }}
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
                style={{ marginLeft: 0 }}
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
                <div className="typewriter-container">
                  <h1 className="heading">
                    Hello, I'm
                    <TypeWriter
                      texts={texts}
                      speed={100}
                      backspaceSpeed={50}
                      delayBetweenTexts={2000}
                    />
                  </h1>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src="https://res.cloudinary.com/dofk7cu8i/image/upload/v1716797105/image_qtht1n.png"
                  alt="About Image"
                  className="img-fluid"
                  style={{
                    width: "350px",
                    height: "350px",
                    border: "5px solid white",
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
