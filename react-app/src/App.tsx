import { useEffect, useRef, useState } from "react";

const connect = () => console.log("Connectiong");
const disconnect = () => console.log("Disconnectiong");

function App() {
  // Cleanup function. The return will be call when unmounted
  useEffect(() => {
    connect();

    return () => disconnect();
  });

  return <div></div>;
}

export default App;
