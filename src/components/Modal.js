import React, { useRef, useEffect } from "react";

const Modal = React.forwardRef(({ closeModal }, ref) => {
  useEffect(() => {
    buttonRef.current.focus();

    const dialog = document.querySelector(".dialog");

    Array.from(document.getElementById("root").children).forEach((child) => {
      if (child !== dialog) {
        child.inert = true;
      }
    });

    const handleKeyPress = (e) => {
      if (e.which === 27) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      Array.from(document.getElementById("root").children).forEach((child) => {
        if (child !== dialog) {
          child.inert = false;
        }
      });

      window.removeEventListener("keydown", handleKeyPress);
      ref.current.focus();
    };
  }, [closeModal]);

  const buttonRef = useRef();
  return (
    <div
      className="dialog"
      role="diaog"
      aria-labelledby="dialog_title"
      aria-modal="true"
    >
      <div className="dialogue__window">
        <div>
          <h2 className="dialog_title">Dialog Example</h2>
        </div>
        <div>
          <p>Buy our stuff</p>
          <button ref={buttonRef} onClick={closeModal}>
            close
          </button>
          <button onClick={closeModal}>OK</button>
        </div>
      </div>
      <div className="dialog__mask"></div>
    </div>
  );
});

export default Modal;
