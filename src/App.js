import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="border">
      Dobozok - App
      <BoxComponent hatterSzin="red" kezdetiSzamlalo={0} />
      <BoxComponent hatterSzin="blue" kezdetiSzamlalo={1} />
      <BoxComponent hatterSzin="green" kezdetiSzamlalo={2} />
    </div>
  );
}

function BoxComponent(props) {
  const [szamlaloAllapota, ujSzamlaloAllapotBeallitasa] = useState(props.kezdetiSzamlalo);
  return (
<div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: props.hatterSzin,
      }}
      className="p-2 m-5 rounded"
      onClick={() => {
        ujSzamlaloAllapotBeallitasa((elozoAllapot) => elozoAllapot + 1);
      }}
    >
      <h1>{szamlaloAllapota}</h1>
    </div>
  );
}

export default App;
