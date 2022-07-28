import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 472px;
  gap: 1rem;
  position: relative;

  .arrow-left,
  .arrow-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    border-radius: 50%;
    padding: 0.75rem;
    z-index: 111;
    border: none;
    background-color: #ed254eff;
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: transform 0.3s ease-in-out;
  }

  .arrow-left {
    left: 2rem;
  }

  .arrow-right {
    right: 2rem;
  }
`;

export default Container;
