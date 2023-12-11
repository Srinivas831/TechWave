// Popup.jsx

import React from 'react';
import styled from 'styled-components';

const Popup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <DIV>
        <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
    </DIV>
  );
};

export default Popup;

const DIV = styled.div`
/* styles.css */

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
}

.display-block {
  display: block;
}

.display-none {
  display: none;
}

.modal-main {
  position: fixed;
  background: white;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  /* box-shadow: 0px 0px 10px 0px #000000; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
`