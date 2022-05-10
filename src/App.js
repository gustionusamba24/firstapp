import React from "react";

function HelloWorld() {
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>Hello World</div>
  );
}

function Button() {
  return <button onClick={() => alert("Anda berhasil")}>Click Saya</button>;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <Button />
    </div>
  );
}

export default App;
