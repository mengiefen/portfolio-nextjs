import { useEffect, useLayoutEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";

const customId = "message-alert";

const FlashMessage = (props) => {
  const { message, type, duration } = props;
  const notify = () => {
    if (type === "alert") {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: customId,
        delay: 1000,
      });
    } else if (type === "success") {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: customId,
        delay: 1000,
      });
    }
  };

  useEffect(() => {
    notify();
  }, []);

  return (
    <div>
      <ToastContainer
        autoClose={duration}
        style={{ zIndex: "1111" }}
        draggable={true}
      />
    </div>
  );
};

export default FlashMessage;
