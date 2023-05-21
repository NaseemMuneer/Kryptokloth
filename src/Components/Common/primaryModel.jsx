import { Button, Modal } from "antd";
import { useEffect } from "react";

function primaryModel({ setModal1Open, modal1Open, open, onOK, onCancel }) {
  return (
    <>
      <Modal
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={modal1Open}
        close={modal1Open}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
}

export default primaryModel;
