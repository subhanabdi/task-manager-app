import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    font-size: 44px;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--main-color);
    font-size: 24px;
  }
  a {
    color: var(--task-color);
    text-transform: capitalize;
    text-decoration: underline;
    font-size: 14px;
  }
`;

export default Wrapper;
