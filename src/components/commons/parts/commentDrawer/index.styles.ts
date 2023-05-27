import styled from "@emotion/styled";

export const Arrow = styled.span`
  @keyframes arrowMove {
    0% {
      /* transform: translateX(0); */
      scale: 1;
    }
    40% {
      /* transform: translateX(10px); */
      scale: 1.2;
    }
    60% {
      /* transform: translateX(15px); */
      scale: 1.3;
    }
  }
  font-size: 30px;
  color: #bdbdbd;
  animation: arrowMove 1s linear infinite;
`;

export const ButtonWrap = styled.div`
  cursor: pointer;
  position: fixed;
  color: #111;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(136, 176, 75, 0.5);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #111;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: rgba(136, 176, 75, 0.8);
    }
    svg {
      transform: translateX(0);
    }
    &:active {
      transform: scale(0.96);
    }
  }
`;
