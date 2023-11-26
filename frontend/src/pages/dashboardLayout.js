import { useEffect, useState } from "react";
import { Outlet, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/dashboardLayoutWrapper";
import Dashboard from "../components/Dashboard";
import customFetch from "../utils/customeFecth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { userNameActions } from "../store/index";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
    };

    const checkTheUser = async () => {
      try {
        await customFetch.post("/user/check-user", data);

        return redirect("/dashboard");
      } catch (error) {
        console.log(error);
        error.message = error?.response?.data?.message;
        return navigate("/");
      }
    };
    checkTheUser();
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = {
      token: token,
    };
    customFetch
      .post("/user/current-user", data)
      .then((response) => {
        const { user } = response.data;
        const userFirstName = user.username.split(" ")[0];
        dispatch(userNameActions.setUserName({ userName: userFirstName }));
      })
      .catch((error) => {
        console.log("Failed to find current user", error);
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <Dashboard />
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
