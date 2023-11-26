import { styled } from "styled-components";

const Wrapper = styled.section`
  .input-container {
    position: relative;
  }
  .input {
    background: var(--input-background);
    color: var(--input-text-color);
  }

  .eye-icon {
    cursor: pointer;
    position: absolute;
    margin-left: -28px;
    margin-top: 12px;
    font-size: 20px;
    color: var(--show-password-color);
  }
`;

export default Wrapper;
