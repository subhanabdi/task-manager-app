import { styled } from "styled-components";

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  position: relative;
  background: var(--task-background);
  /* padding: 1.8rem 2.2rem; */
  margin-bottom: 30px;
  z-index: 999;
  .task-container {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e3e4f1;
    padding: 20px 24px 15px 24px;
  }

  .no-task {
    color: gray;
    font-size: 20px;
    padding: 20px 20px;
    border-bottom: 1px #380909 solid;
  }

  .check-container {
    cursor: pointer;
    border: 1px solid var(--main-color);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .check-icon {
    display: none;
    cursor: pointer;
  }
  .check-container:hover .check-icon {
    cursor: pointer;
    /* display: block;
    font-size: 18px;
    background: #ac8484;
    padding: 1px;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    color: var(--white-color); */
  }

  .task-text {
    font-size: var(--medium-text);
    color: var(--task-color);
    margin-left: 24px;
  }
  .complete {
    .check-icon {
      /* transform: translate(-50%, -50%); */
      display: block;
      font-size: 18px;
      background: var(--main-color);
      padding: 1px;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      color: var(--white-color);
    }

    .task-text {
      color: var(--complete-task-color);
      text-decoration-line: line-through;
    }
  }

  .cancel {
    transition: all 0.2s ease-out;
  }
  .cancel:hover {
    margin-top: -5px;
  }

  .cancel,
  .cancel:active {
    margin-left: auto;
    border: none;
  }

  .additional-info {
    padding: 20px 24px 15px 24px;
    color: var(--filter-btn-color);
    font-size: var(--small-text);
    display: flex;
    justify-content: space-between;
    button {
      color: var(--filter-btn-color);
      font-size: var(--small-text);
      font-family: inherit;
    }
  }
  .action-btns {
    display: flex;
    column-gap: 18px;
    button {
      font-weight: 700;
    }
  }

  @media (max-width: 590px) {
    .action-btns {
      display: none;
    }
  }

  @media (max-width: 430px) {
    .task-text {
      /* font-size: var(--small-text); */
    }
  }
`;

export default Wrapper;
