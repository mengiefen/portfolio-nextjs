import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiAlertOctagon } from "react-icons/fi";
import FlashMessage from "./Message.styled";


const Message = (props) => {
  const { duration, icon, message, title, type, color, position } = props;

  const [showMessage, setShowMessage] = useState(true);
  const [progress, setProgress] = useState(duration / 1000);

  // document.addEventListener('click', () => {
  //   setShowMessage(false);
  // });

  (duration / 1000) *
    useEffect(() => {
      if (progress === 0) {
        setShowMessage(false);
      }
      const timer =
        progress > 0 &&
        setInterval(() => setProgress(Math.floor(progress - 1)), 1000);
      if (progress < 0) {
        setShowMessage(false);
      }

      return () => clearInterval(timer);
    }, [progress]);

  return (
    showMessage && (
      <FlashMessage
        style={position}
        initial={{ scale: 0, y: "-17rem" }}
        whileInView={{
          scale: 1,
          opacity: 1,
          y: "-11rem",
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        drag
        dragConstraints={{
          left: 0,
          right: 0,
        }}
      >
        <div className={`message-header header-${type}`}>
          <span className={`message-header-icon icon-${type}`}>{icon}</span>
          <span className={`message-header-title title-${type}`}>{title}</span>
        </div>
        <p className={`message-content message-${color}`}>{message}</p>
        <button
          type="button"
          className="close-button"
          onClick={() => setShowMessage(false)}
        >
          <AiOutlineCloseCircle className="close-icon" />
        </button>

        <motion.progress
          value={progress}
          max={duration / 1000}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="progress-bar"
        />      
      </FlashMessage>
    )
  );
};

Message.defaultProps = {
  position: {
    position: "absolute",
    right: "0.5rem",
  },

  duration: 5000,
  icon: <FiAlertOctagon />,
  title: "Hello there",
  type: "info",
  color: "black",
};

Message.propTypes = {
  duration: PropTypes.number,
  icon: PropTypes.node,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  position: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
};

export default Message;
