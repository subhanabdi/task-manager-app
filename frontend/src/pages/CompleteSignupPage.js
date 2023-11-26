import { useEffect } from "react";
import { Form, redirect, useNavigate, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { userNameActions } from "../store/index";

import Wrapper from "../assets/wrappers/commonWrapper";
import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";

import { PiArrowRightBold, PiArrowLeftBold } from "react-icons/pi";

import customFetch from "../utils/customeFecth";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  //Change the request to the formData to simplify
  const formData = await request.formData();
  //Change the formData w/c is array to normal JS obj to send to the backend
  const data = Object.fromEntries(formData);

  try {
    const dataFromServer = await customFetch.post("/complete-signup", data);
    const { token } = dataFromServer.data;
    localStorage.setItem("token", token);

    toast.success("Signup completed", { autoClose: 1000 });
    return redirect("/login");
  } catch (error) {
    //use conditional nesting
    toast.error(error?.response?.data?.message, { autoClose: 4000 });
    return error;
  }
};

const CompletePage = () => {
  const signupEmail = useSelector((state) => state.signup.email);
  const signupPassword = useSelector((state) => state.signup.password);
  const signupConfirmPassword = useSelector(
    (state) => state.signup.confirmPassword
  );
  const language = useSelector((state) => state.langPreference.langPreference);

  const isArabic = language === "ar";

  useEffect(() => {
    document.body.classList.toggle("isArabic", isArabic);
  }, [isArabic]);

  const navigate = useNavigate();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isSigning = navigation.state === "submitting";

  const updateUserName = (event) => {
    const newUserName = event.target.username.value;
    dispatch(userNameActions.setUserName({ userName: newUserName }));
  };

  // console.log(
  //   "Data from store",
  //   signupEmail,
  //   signupPassword,
  //   signupConfirmPassword
  // );

  return (
    <Wrapper>
      <div className="signup-container">
        <div className="inside-singup">
          <h1 className="header-text">
            {isArabic ? "إكمال إنشاء حساب" : "Complete Signup"}
          </h1>
          <Form method="POST" onSubmit={updateUserName}>
            <FormRow
              name="username"
              type="text"
              label={isArabic ? "اسم المستخدم" : "Username"}
            />
            <FormRow name="phone" label={isArabic ? "رقم الهاتف" : "Phone"} />
            <FormRow
              name="birthDayYear"
              label={isArabic ? "سنة الميلاد" : "Birthday Year"}
            />

            <input name="email" type="hidden" value={signupEmail} />
            <input name="password" type="hidden" value={signupPassword} />
            <input
              name="confirmPassword"
              type="hidden"
              value={signupConfirmPassword}
            />

            <CtaButton
              text={
                isSigning
                  ? isArabic
                    ? "جاري الإنشاء، انتظر"
                    : "Signing..."
                  : isArabic
                  ? "إكمال إنشاء الحساب"
                  : "Complete signup"
              }
              Icon={PiArrowRightBold}
              type="submit"
              disabled={isSigning}
            />
            <CtaButton
              text={isArabic ? "للخلف" : "Back"}
              Icon={PiArrowLeftBold}
              type="button"
              onClick={() => navigate("/")}
            />
          </Form>
          <p className="normal-text">
            {isArabic ? "  تمتلك حساب بالفعل " : "Already have an account?"}{" "}
            <a className="go-link" href="/login">
              {isArabic ? " تسجيل الدخول " : "Login"}
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default CompletePage;
