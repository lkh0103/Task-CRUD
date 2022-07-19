import React, { useRef, useState } from "react";

export default function DemoUseRef() {
  const [keyWord, setKeyWord] = useState("");
  const usernameRef:any = useRef(null);
  const passwordRef:any = useRef(null);
 
  
  const handleLogin = () => {
    console.log("username", usernameRef.current.value);
    console.log("password", passwordRef.current.value);
  };

  return (
    <div className="container">
      

      <h3>Login</h3>
      <div className="form-group">
        <p>User</p>
        <input ref={usernameRef} className="form-control" />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input ref={passwordRef} className="form-control" />
      </div>
      <div className="form-group">
        <button
          className="btn btn-success"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
