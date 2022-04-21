import styled from 'styled-components';

const SlideItem = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;

  .slider-detail {
    width: 40%;
    height: auto;
    border-radius: 3rem 0 3rem 0;
    color: ${({ theme }) => theme.primary};
    background-color: ${(props) => props.theme.bg};
    padding: 2rem;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 111;
    text-align: center;
    opacity: 0.9;
  }

  .title {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .desc {
    line-height: 1.5;
    font-weight: 300;
  }

  .slide-img {
    float: right;
  }
`;

export default SlideItem;
