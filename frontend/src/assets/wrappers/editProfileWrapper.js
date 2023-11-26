import { styled } from "styled-components";

const Wrapper = styled.section`
  /* height: 100%;
  width: 100%;
  border-radius: 5px;
  position: relative;
  background: var(--task-background);
  margin-bottom: 30px;
  z-index: 999; */

  display: flex;
  justify-content: center;
  margin-top: -13rem;
  position: relative;
  z-index: 1;

  .edit-profile-header {
    color: var(--main-color);
    background: var(--task-background);
    padding: 2.2rem 10rem;
    border-radius: 5px;
    box-shadow: var(--task-shadow);
    margin-bottom: 2.4rem;
    font-weight: 700;
    font-size: var(--large-medium-text);
  }

  .edit-profile-form {
    box-shadow: var(--task-shadow);
    padding: 3.6rem 6.6rem;
    background: var(--task-background);
    border-radius: 5px;
    margin-bottom: 3rem;
  }
`;

export default Wrapper;
