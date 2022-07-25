import styled from "styled-components";

const SlideItem = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  overflow: hidden;


  .slider-detail {  
    position: absolute;
    top: -100%;
    left: 0;
    width: 80%;
    height: 100%; 
    color: ${({ theme }) => theme.bg};
    background-color: ${(props) => props.theme.primary};
    padding: 1rem;
    position: absolute;
    top: 0%;
    left: 0;
    z-index: 111;
    text-align: center;
    opacity: 0.9;
    border-radius : 20px;
  }

  .title {
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  .desc {
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 400;
  }

  .slide-img {
    float: right;
    filter: opacity(0.8);
    transition: all 0.5s;

    &:hover {
      filter: opacity(0.9);
      transform: scale(1.1);
    }
  }
`;

export default SlideItem;
