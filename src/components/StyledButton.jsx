// import React from "react";

// const StyledButton = () => {
//   const buttonStyle = {
//     backgroundColor: "#007BFF",
//     padding: "10px 20px",
//     fontSize: "16px",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   };

//   return <button style={buttonStyle}>Click Me</button>;
// };

// export default StyledButton;

// import React from "react";

// const StyledButton = () => {
//   return (
//     <>
//       <style>
//         {`
//           .internal-button {
//             background-color: #28a745;
//             padding: 10px 20px;
//             font-size: 16px;
//             color: white;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//           }
//         `}
//       </style>
//       <button className="internal-button">Click Me</button>
//     </>
//   );
// };

// export default StyledButton;

import React from "react";
import "../App.css";

const StyledButton = () => {
  return <button className="external-button">Click Me</button>;
};

export default StyledButton;
