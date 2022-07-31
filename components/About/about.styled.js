import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: space-around;

  .content {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .img {
    flex: 1;
    align-self: center;
    filter: grayscale(0.7);
    border-radius: 100% 100% 0 100%;
  }

  .desc {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.primary};
    line-height: 2;
    flex: 2;
    align-items: center;

    .general-desc {
      text-align: justify;
    }
  }

  .title {
    text-transform: uppercase;
  }

  .btn {
    max-width: 200px;
  }

  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .card-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;
  }
`;
export default Container;
