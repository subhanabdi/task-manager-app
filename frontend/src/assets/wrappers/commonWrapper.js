// Common wrapper for signup, complete signup and login pages

import { styled } from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  .signup-container {
    z-index: 3;
    /* height: 54rem; */
    height: 100%;
    background: var(--secondary-background);
    padding: 2rem 4.8rem;
  }

  .login-header {
    margin: 3rem 14rem;
    margin-bottom: 5rem;
  }

  .login-page-normal-text {
    margin-top: 3rem;
  }

  @media (max-width: 960px) {
    .signup-container {
      position: relative;
      width: 100%;
    }
    .inside-signup {
      width: 100%;
    }
  }

  @media (max-width: 610px) {
    .header-text {
      font-size: 40px;
    }

    .login-header {
      margin: 3rem 0;
    }
  }
  @media (max-width: 525px) {
    .signup-container {
      z-index: 3;
      /* height: 55rem; */
      background: var(--secondary-background);
      padding: 2rem 2rem;
      padding-top: 3rem;
    }
    .main-container {
      max-width: 88%;
    }
    .image-container {
      max-width: 88%;
    }
    .header-text {
      font-size: 30px;
    }
  }
`;

export default Wrapper;
