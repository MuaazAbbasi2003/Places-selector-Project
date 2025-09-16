import { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { children, opentheModal, onClose },
  ref
) {
  const dialog = useRef();

  // useImperativeHandle(ref, () => {
  //   return {
  //     open: () => {
  //       dialog.current.showModal();
  //     },
  //     close: () => {
  //       dialog.current.close();
  //     },
  //   };
  // });

  useEffect(() => {
    if (opentheModal === true) {
      dialog.current.showModal();
    }
    if (opentheModal === false) {
      dialog.current.close();
    }
  }, [opentheModal]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
