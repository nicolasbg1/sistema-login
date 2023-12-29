import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  position: relative;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: #ddebf0;

  &:hover #rightArrow {
    background-color: #27c39f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  &:hover #leftArrow {
    background-color: #27c39f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  &:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  &:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
  }
`;

const clipPathColor = '#2761c3';

const Clip = styled.div`
  --color: ${clipPathColor};
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #195480;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
`;

const Arrow = styled.div`
  position: absolute;
  transition: 0.2s;
  background-color: #2761c3;
  top: 35%;
  width: 11%;
  height: 30%;
`;

const leftArrowAnimation = keyframes`
  from {
    transform: translate(0px);
  }
  to {
    transform: translateX(10px);
  }
`;

const rightArrowAnimation = keyframes`
  from {
    transform: translate(0px);
  }
  to {
    transform: translateX(-10px);
  }
`;

const LeftArrow = styled(Arrow)`
  left: -13.5%;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
  animation: ${leftArrowAnimation};
`;

const RightArrow = styled(Arrow)`
  clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
  animation: ${rightArrowAnimation};
`;

const Corner = styled.div`
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: #2761c3;
  box-shadow: inset 1px 1px 8px #2781c3;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
`;

const CornerPosition = styled(Corner)`
  &.rightTop {
    top: -1.98em;
    left: 91%;
  }

  &.leftTop {
    top: -1.96em;
    left: -3.0em;
  }

  &.leftBottom {
    top: 2.10em;
    left: -2.15em;
  }

  &.rightBottom {
    top: 45%;
    left: 88%;
  }
`;

const keyframeAnimation = keyframes`
  from {
    background-color: #2781c3;
  }
  to {
    background-color: #27c39f;
  }
`;

const ChangeColorAnimation = styled.div`
  animation: ${keyframeAnimation};
`;

const GreenLightAnimation = styled.div`
  from {
  }
  to {
    box-shadow: inset 0px 0px 32px #27c39f;
  }
`;

export {
    Button, ChangeColorAnimation, Clip, Corner,
    CornerPosition, GreenLightAnimation, LeftArrow,
    RightArrow
};

