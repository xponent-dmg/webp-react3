import React from "react";

export const StyledButton1 = () => {
  const buttonStyle = {
    backgroundColor: "#007BFF",
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <button style={buttonStyle}>Click Me</button>;
};

export const StyledButton2 = () => {
  return (
    <>
      <style>
        {`
          .internal-button {
            background-color: #28a745;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
        `}
      </style>
      <button className="internal-button">Click Me</button>
    </>
  );
};


export const StyledButton3 = () => {
  return <button className="external-button">Click Me</button>;
};

