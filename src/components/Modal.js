import { useRef } from 'react';
import ReactDom from "react-dom";

import closeImage from '../assets/icons/close.svg';

export const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  const closeModalImage = <img className="modal-close" src={closeImage} alt="Close the Modal"/>

  const closeModal = (evt) => {
    if (evt.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal-container container">
        <h4 className="little-title">Thank you for contacting me!</h4>
        <p className="text">I will give you an answer as soon as possible</p>
        <button className="modal-button" onClick={() => setShowModal(false)}>{closeModalImage}</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};