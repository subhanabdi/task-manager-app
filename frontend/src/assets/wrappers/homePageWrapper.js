import { styled } from "styled-components";

import bigcover from "../images/bigcover.png";
import insidecover from "../images/insidecover.png";

const Wrapper = styled.section`
  /* overflow: hidden; */
  display: flex;
  justify-content: center;

  overflow-x: hidden;
  .img {
    position: absolute;
    top: 0;
    left: 0;
    /* height: 100vh; */
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    // height: auto;
    background: lightgray -420579.188px 9511.216px / 21741.606% 11808.408% no-repeat;
    z-index: -999;
  }

  .isArabic .inside-main {
    flex-direction: row-reverse !important;
  }

  .inside-main {
    display: flex;
    margin: 4rem 0;
    box-shadow: var(--main-shadow);
  }

  .image-container {
    position: relative;
    box-shadow: var(--main-shadow);
    height: 54rem;
    .inside-image {
      height: 100%;
    }
  }

  .inside-image-container {
    position: absolute;
    top: 0;
    left: 0;
    margin: 4rem 0rem;
    width: 80%;
    margin-left: 10%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.26) 0%,
      rgba(255, 255, 255, 0.07) 100%
    );
    backdrop-filter: blur(10px);
    /* padding: 15rem 15rem; */
  }
  .inside-image-container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 10rem 3rem;
    margin-bottom: 15rem;
  }
  .inside-image-container-content-text {
    font-size: 5.4rem;
    color: var(--white-color);
    font-weight: 400;
  }

  .lang {
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
    color: var(--white-color);
    font-weight: 500;
    font-size: var(--large-large-text);
    margin-left: 5px;
  }

  @media (max-width: 960px) {
    .img {
      position: fixed;
      height: 100%;
      width: 100%;
    }
    .main-container {
      width: 500px;
      max-width: 80%;
    }
    .inside-main {
      margin-top: 32rem;
    }
    .image-container {
      position: absolute;
      top: 0;
      margin-top: 3.8rem;
      height: 285px;
      width: 500px;
      max-width: 80%;
      box-shadow: var(--task-shadow);
      z-index: 9;
    }
    .inside-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .inside-image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      margin-left: 10%;
      margin-top: 3rem;
    }
    .inside-image-container-content {
      margin: 4rem 0rem;
      margin-bottom: 2.6rem;
    }
    .inside-image-container-content-text {
      font-size: 4rem;
    }
  }

  @media (max-width: 515px) {
    .main-container {
      max-width: 88%;
    }
    .image-container {
      max-width: 88%;
    }
  }
`;

export default Wrapper;
