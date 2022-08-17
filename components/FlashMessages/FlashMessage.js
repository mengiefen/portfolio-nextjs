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
    else  {
      toast(message, {        
        icon: "🤗",
        style: {
          background: `linear-gradient(
            65deg,
            var(--dark-gray) 0%,
            var(--dark-bg) 10%,
            var(--dark-bg1) 90%,
            var(--green) 100%
          )`,
          fontFamily:   "'Oregano', cursive",
          letterSpacing: "1.5px",
          boxShadow: "0px 0px 4px  var(--green)",
        },
        position: toast.POSITION.BOTTOM_RIGHT,
        toastId: customId,
        delay: 1000,
        theme: "dark",       
      });
    }
  };

  useEffect(() => {
    notify();
    },[]);

  return (
    <div>
      <ToastContainer
        autoClose={duration}
        style={{ zIndex: "1111" }}       
      />
    </div>
  );
};

export default FlashMessage;
