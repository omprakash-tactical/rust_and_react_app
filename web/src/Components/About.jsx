import React, { useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function About() {
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
      <Header></Header>
      <div className="container-fluid">
        <div className="container">
          <div className="card p-3 m-3 vision">
            <div className="allignment-about">VISION AND MISSION</div>
            <p>
              The motto of East & West High School, Gyanam ashta cha, reveals at
              least a facet of the philosophy of the institution. Apart from
              equipping young pupils with intellectual abilities and developing
              basic competence in them, the institution lays great stress on the
              values that they inculcate, the faith they develop in their own
              self, mankind and a range of human qualities. To enable a child to
              grow into a healthy, capable and good individual is an aim E&WHS
              seeks to fulfill in respect of each of its students.
            </p>
            <p>
              Metaphorically East & West stands for a blend of two complementary
              characteristic of an ideal human being. If he should be strong,
              capable and confident, he should also be humane and useful for the
              society at large. Admittedly such an aim is not easy to achieve
              and yet over the years of its experience, the institution has
              enhanced its own capability of accomplishing the task in a
              substantial way.
            </p>
            <p>
              East & West High School consciously pays almost equal attention to
              both English and Hindi languages. Although it is an English medium
              school, at the primary level use of mother tongue or Hindi is not
              discouraged, and further, an experimental batch is likely to be
              taken up in the Hindi medium as well. Language training is an end
              in itself and quite valuable and then it is a means of subject
              studies or even the entire range of intellectual endeavor.
            </p>
            <p>
              Language and mathematics are the most important components of the
              school curriculum but a fuller education means much more and this
              school aims at that. Alongside the development of critical and
              rational faculties of a child the school should contribute towards
              the blossoming of the creative potential of every child. East &
              West High School seeks to create a proper learning environment
              conducive to the achievement of these goals
            </p>
          </div>
          <div className="card p-3 m-3 vision">
            <div className="allignment-about">FOUNDERS</div>
            <p>
              Prof Kantha passed away on December 25 in Delhi after a prolonged
              illness. He was one of the founder members of RTE Forum
              constituted in 2010 just after RTE Act came into force with a view
              to organize civil societies, social workers, educationists,
              academia, students associations, teachers associations and
              communities on one platform. He had founded Voluntary Forum of
              Education (VFE) in Bihar more than a decade ago.
            </p>
          </div>
          <div className="card p-3 m-3 vision">
            <div className="allignment-about">Director Desk</div>
            <p>
              Mrs. Shilpi Shah started her career as an advocate in Patna High
              Court, then shifted to Delhi n started practising in Supreme Court
              of India, Delhi High Court as well as various tribunals. Fate once
              again brought her back to Patna to achieve her dreams of working
              with underprivileged children and thus, here she is today as the
              director of East and West High School, Village Bela, Patna. She
              believes education is not only about classroom studies and the age
              old textbooks but it is about the children discovering their
              potentials and finding the answer to the question ”who am I?” and
              believing ”I am worth it.”
              <h6>Shilpi Shah </h6>
              <h6> Director</h6>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
