import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/errorPageWrapper";

import img from "../assets/images/not-found.svg";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="..">back home</Link>
      </div>
    </Wrapper>
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     padding: "100px 0",
    //     background: "#002",
    //   }}
    // >
    //   <img
    //     src={img}
    //     alt=""
    //     style={{
    //       width: "100%",
    //       height: "100%",
    //       margin: "20px auto",
    //     }}
    //   />

    // </div>
  );
};

export default ErrorPage;
