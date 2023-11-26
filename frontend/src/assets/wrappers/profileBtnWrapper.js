import { styled } from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  /* width: 100%; */
  width: 246px;
  padding: 0.8rem 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  color: var(--white-color);
  font-weight: 600;
  font-size: var(--large-medium-text);
  font-family: "Lato", sans-serif;
  border-radius: 6px;
  box-shadow: var(--button-shadow);
  transition: all 0.3s ease;

  @media (max-width: 490px) {
    width: 90vw;
  }
`;

export default Wrapper;
