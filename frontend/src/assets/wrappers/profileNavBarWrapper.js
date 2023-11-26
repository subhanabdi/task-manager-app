import { styled } from "styled-components";

const Wrapper = styled.section`
  font-family: "Lato", sans-serif;
  background: var(--profile-background);
  padding: 3.4rem 2rem 2rem 2rem;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 100%;
  /* .cancel-container {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    .cancel-inside {
      transition: all 0.2s ease-out;
      width: 100%;
      height: 100%;
    }
  }
  
  .cancel-inside:hover {
    scale: calc(1.3);
    font-weight: bold;
  } */

  .user-greet {
    margin-bottom: 4rem;
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 700;
  }

  @media (max-width: 490px) {
    background: var(--back-drop-background);
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
