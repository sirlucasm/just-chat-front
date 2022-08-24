import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100vh;
  background: url('/assets/world-bg.png');
  background-size: 140% 140%;
  background-repeat: no-repeat;
  animation: bgAnimate infinite 40s alternate ease;

  @keyframes bgAnimate {
    from {
      background-position: 0;
    }

    to {
      background-position: 100%;
    }
  }

  @media screen and (max-width: 912px) {
    background-size: cover;
  }
`;
