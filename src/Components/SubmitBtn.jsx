import React, { useState } from "react";
import ModalSubmit from "./ModalSubmit";
import Btn from "./UI/Btn";
import { Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsGoing } from "../store/slices/timeSlice";
import useAuth from "../hooks/useAuth";

const SubmitBtn = () => {
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  return (
    <>
      <Btn
        style={{ margin: "50px 0" }}
        onClick={() => {
          isAuth ? setIsModal(true) : setError(true);
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
      {error && <Alert severity="error">You need to LogIn!</Alert>}
    </>
  );
};

export default SubmitBtn;
