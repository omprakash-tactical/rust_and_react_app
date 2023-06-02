import React, { useEffect } from "react";
import Header from "../Layout/Header";
import About from "./About";

function School() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  
  return (
    <>
      <div className="container main_header">
        <div className="row text-center text-info m-3 p-1">
          <div className="col-md-4">
            <img
              src="https://static.wixstatic.com/media/56488f_372a3661c3d8429e91a1a53f9c203060~mv2.png/v1/fill/w_228,h_123,al_c,lg_1,q_85,enc_auto/Capture_edited.png"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <p className="school_logo">EAST & WEST HIGH SCHOOL</p>
            <p className="school_affilation">
              Run By East & West Educational Society Affiliated to C.B.S.E New
              Delhi
            </p>
          </div>
        </div>
      </div>
      <Header></Header>
      <About />
    </>
  );
}

export default School;
