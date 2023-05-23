import { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  // "After render"
  // They will be render after each render.
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App <-";
  });

  return <input ref={ref} type="text" className="form-control" />;
}

export default App;
