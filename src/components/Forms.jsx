import React, { useState,useRef } from "react";

export function FormUseState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${name}\nEmail: ${email}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Live Name:</strong> {name}
        </p>
        <p>
          <strong>Live Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export function FormUseRef(){
  const nameRef = useRef();
  const emailRef = useRef();
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    setSubmittedData({ name, email });
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameRef} />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input type="email" ref={emailRef} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Submitted Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Submitted Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
}
