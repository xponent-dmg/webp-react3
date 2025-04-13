import React, { useRef } from "react";

function SimpleForm() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="p-4">
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default SimpleForm;
