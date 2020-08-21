import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";
import "wicg-inert";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const buttonRef = useRef();

  return (
    <>
      <div className="App"></div>
      {isOpen && <Modal closeModal={closeModal} ref={buttonRef} />}
      <button>Another button</button>
      <button onClick={() => setIsOpen((s) => !s)} ref={buttonRef}>
        Open Modal
      </button>
    </>
  );
}

export default App;
