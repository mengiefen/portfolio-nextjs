import { motion } from 'framer-motion';
import styled from 'styled-components';

const FlashMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid gray;
  box-shadow: 0 0 4px ${({ theme }) => theme.green};
  background-color: white;
  z-index: 10;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.gray};

  @media (max-width: ${({ theme }) => theme.device.tablet}) {
    width: 320px;
  }

  .message-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.1rem 0;
    padding-left: 1rem;
    box-shadow: 2px 0 4px gray;
  }

  .message-header-icon {
    padding-right: 1rem;
    display: block;
    margin: auto 0;
    font-size: 2rem;
  }

  .message-header-title {
    padding-right: 1rem;
    display: block;
    margin: auto 0;
    letter-spacing: 1px;
    font-weight: 700;
  }

  .message-content {
    font-size: 0.9rem;
    text-align: center;
    padding: 0 2rem;
    min-height: 20px;
  }

  .header-info {
    background-color: ${({ theme }) => theme.bg};
  }

  .header-warning {
    background-color: #eecb96;
  }

  .header-alert {
    background-color: #e2adb2;
  }

  .header-success {
    background-color: #9fe69f;
  }

  .icon-info {
    color: ${({ theme }) => theme.red};
  }

  .icon-alert {
    color: #f44336;
  }

  .icon-warning {
    color: #ff9800;
  }

  .icon-success {
    color: #06860a;
  }

  .title-info {
    color: ${({ theme }) => theme.red};
  }

  .title-alert {
    color: #b41828;
  }

  .title-warning {
    color: #b97105;
  }

  .title-success {
    color: #0b580b;
  }

  .message-white {
    color: white;
  }

  .message-black {
    color: black;
  }

  .close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .close-icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};

    &:hover {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export default FlashMessage;
