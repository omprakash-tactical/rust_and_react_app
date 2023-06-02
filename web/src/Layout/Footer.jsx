import React from "react";

function Footer() {
  return (
    // <div className="container">
    //   <p>
    //     &copy; {new Date().getFullYear()} Your Website Name. All rights
    //     reserved.
    //   </p>
    //   <p>Designed and developed by Your Name</p>
    // </div>
    <div>
      <div className="container-fluid footer-bg">
        <div className="row text-center text-info ">
          <div className="col-md-4 contact_text">
            <p>Connect with us on</p>
            <div>
              <ul>
                <a href="https://www.facebook.com/ewhsarun" target="_blank">
                  <img
                    src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
                    alt="Facebook"
                  />
                </a>
              </ul>
              <ul>
                <a href="http://www.twitter.com/wix" target="_blank">
                  <img
                    src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png"
                    alt="Twitter"
                  />
                </a>
              </ul>
              <ul>
                <a href="https://instagram.com/wix/" target="_blank">
                  <img
                    src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
                    alt="Instagram"
                  />
                </a>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://static.wixstatic.com/media/56488f_372a3661c3d8429e91a1a53f9c203060~mv2.png/v1/fill/w_228,h_123,al_c,lg_1,q_85,enc_auto/Capture_edited.png"
              alt=""
            />
          </div>
          <div className="col-md-4 ">
            <p className="contact_text">Contact Us </p>
            <p className="contact_text_con">Tel:-9631033989</p>
            <p className="contact_text_con">
              Email: eastandwesths@rediffmail.com{" "}
            </p>
            <p className="contact_text_con"> Address: Bela,patna</p>
          </div>
        </div>
        <div className="row text-center text-info ">
          <div className="col-md-12 contact_text allignment">
            <p>
              &copy; {new Date().getFullYear()} East & West. All rights
              reserved.
            </p>
            <p>Designed and developed by Om Prakash </p>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Footer;
