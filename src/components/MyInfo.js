import React from "react";

// JSX
function MyInfo() {
  let firstName = "Joseth";
  let lastName = "Smith";
  return (
    <div>
      <h1>
        {firstName} {lastName}
      </h1>
      <p>Vacation destination!</p>
      <ol>
        <li>Hawaii</li>
        <li>Rockie mountains</li>
        <li>Greece</li>
      </ol>
    </div>
  );
}

export default MyInfo;
