import React, { useState } from "react";
import ModalSubmit from "./ModalSubmit";
import Btn from "./UI/Btn";
import { useDispatch } from "react-redux";
import { setIsGoing } from "../store/slices/timeSlice";

const SubmitBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Btn
        style={{ margin: "50px 0" }}
        onClick={() => {
          setIsModal(true);
          dispatch(setIsGoing({ isGoing: 2 }));
        }}
      >
        Submit
      </Btn>
      {isModal && (
        <ModalSubmit
          onModal={() => setIsModal(false)}
          setIsModal={setIsModal}
          isModal={isModal}
        />
      )}
    </>
  );
};

export default SubmitBtn;
