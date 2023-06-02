import React, { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const validate = () => {
    setemailerror('')
    setpassworderror('')
    let is_valid = true;
    if (email === "" || email === undefined || email === null) {
      setemailerror("please enter email");
      is_valid = false;
      return;
    }
    if (password === "" || password === undefined || password === null) {
      setpassworderror("please enter password");
      is_valid = false;
      return;
    }

    return is_valid;
  };
  const submit = () => {
    if (validate()) {
      console.log("sab sahi hai");
      let payload = {
        email,
        password,
      };
      console.log("payload", payload);
    }
  };

  return (
    <>
      <div className="container login_container ">
        <div className="mb-3 p-5 card">
          <div className="mx-auto text-center">
            <img
              src="https://static.wixstatic.com/media/56488f_372a3661c3d8429e91a1a53f9c203060~mv2.png/v1/fill/w_228,h_123,al_c,lg_1,q_85,enc_auto/Capture_edited.png"
              alt=""
              width="70%"
            />
          </div>

          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {emailerror && <p className="text-danger">{emailerror}</p>}
          <label for="exampleFormControlInput2" className="form-label mt-5">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {passworderror && <p className="text-danger">{passworderror}</p>}
          <button className="loginsubmit mt-5" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
