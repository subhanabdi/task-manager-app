import { styled } from "styled-components";

const Wrapper = styled.section`
  background: var(--primary-background);
  .top-dashboard {
    height: 6.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem 2.5rem;
    color: var(--main-color);
    background: var(--secondary-background);
    border: 1px solid rgba(0, 0, 0, 0);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  
  }

 

  .logo-and-text {
    display: flex;
    align-items: center;
    gap: 1rem;
    h2 {
      font-size: var(--large-large-text);
      font-weight: 400;
    }
  }

  .add-info {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    /* font-weight: 500; */
    font-size: 20px;
    h2,
    span {
      cursor: pointer;
    }
    position: relative;
  }

  .profile-navbar {
    position: fixed;
    top: 90px;
    right: 20px;
    /* background-color: rgba(0, 0, 0, 0.9); */
    /* width: 50%;
    height: 100%; */
    z-index: 99;

    /* display: flex;
    align-items: center; */
    /* justify-content: center; */
    transition: all 0.2s ease-out;

    /* Hiding the navigation */
    transform: translateX(100%);

    /* Make it unaccessible to mouse and keyboard */
    pointer-events: none;

    /* Hide it from screen readers */
    visibility: hidden;
  }

  .nav-open .profile-navbar {
    transform: translateX(0);
    pointer-events: auto;
    visibility: visible;
  }

  .dashboard-image-container {
    height: 230px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);
  }
  .dashboard-image {
    width: 100%;
    height: 100%;
  }


  @media (max-width: 490px) {
    .profile-navbar {
    position: fixed;
    top: 60px;
    /* right: 20px; */
    left: 0;
    height: auto;
    bottom: 0;
    width: 100%;
 

  }
    .top-dashboard {
      padding: 1.6rem 2rem;
    }
    .logo-and-text {
      gap: 1rem;
      h2 {
        font-size: var(--large-text);
      }
    }
    .add-info {
      gap: 2.5rem;
      font-size: 18px;
    }
  }
  @media (max-width: 420px) {
    .top-dashboard {
      padding: 1.6rem 1.6rem;
    }
    .logo-and-text {
      gap: 1rem;
      h2 {
        font-size: 20px;
      }
    .add-info {
      gap: 2rem;
      font-size: 18px;
    }
  }
`;

export default Wrapper;
