import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Form, redirect, useNavigation } from "react-router-dom";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import customFetch from "../utils/customeFecth";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    const dataFromServer = await customFetch.post("/auth/login", data);

    const { token } = dataFromServer.data;
    localStorage.setItem("token", token);

    // toast.success("Login success, login page", { autoClose: 3000 });
    toast.success("Login success", { autoClose: 2000 });
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    error.message = error?.response?.data?.message;
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const LoginPage = () => {
  const token = localStorage.getItem("token");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  const language = useSelector((state) => state.langPreference.langPreference);

  const isArabic = language === "ar";

  useEffect(() => {
    document.body.classList.toggle("isArabic", isArabic);
  }, [isArabic]);

  const navigation = useNavigation();

  const isSigning = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="login-header">{isArabic ? "تسجيل دخول" : "login"}</h1>
          <Form method="POST">
            <FormRow
              name="email"
              type="text"
              label={isArabic ? "الحساب" : "Email"}
            />
            <FormRow
              name="password"
              type={passwordVisible ? "text" : "password"}
              label={isArabic ? "الرقم السري" : "Password"}
              EyeIcon={passwordVisible ? BsEye : BsEyeSlash}
              togglePassword={togglePasswordVisible}
            />
            <h1></h1>
            <CtaButton
              text={
                isSigning
                  ? isArabic
                    ? "جاري الإنشاء، انتظر"
                    : "Logging in..."
                  : isArabic
                  ? "تسجيل دخول"
                  : "Login"
              }
              type="submit"
            />
          </Form>
          <p className="normal-text login-page-normal-text">
            {isArabic ? "ليس عندك حساب ؟" : "Don't have an account?"}{" "}
            <a className="go-link" href="/">
              {isArabic ? "انشاء الحساب" : "Singup"}
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default LoginPage;
