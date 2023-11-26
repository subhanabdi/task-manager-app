import { useState } from "react";
import { useLoaderData, redirect, Form, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import FormRow from "../components/FormRow";
import CtaButton from "../components/CtaButton";
import customFetch from "../utils/customeFecth";

import { toast } from "react-toastify";

import { userNameActions } from "../store/index";

import { AiOutlinePlusCircle } from "react-icons/ai";

import Wrapper from "../assets/wrappers/editProfileWrapper";

const token = localStorage.getItem("token");

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.token = token;

  try {
    await customFetch.patch("/user/update-user", data);

    toast.success("Successfully updated", { autoClose: 1000 });
    return redirect("/dashboard");
  } catch (error) {
    //use conditional nesting
    toast.error(error?.response?.data?.message, { autoClose: 4000 });
    return error;
  }
};

const EditProfile = () => {
  const language = useSelector((state) => state.langPreference.langPreference);
  const isArabic = language === "ar";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisible = () => setPasswordVisible(!passwordVisible);

  const dispatch = useDispatch();

  const updateUserName = (event) => {
    const newUserName = event.target.username.value;
    dispatch(userNameActions.setUserName({ userName: newUserName }));
  };

  return (
    <Wrapper>
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <h3>
            {isArabic ? "تعديل بيانات الحساب" : "Modify User Information"}
          </h3>
        </div>

        <Form
          className="edit-profile-form"
          method="POST"
          onSubmit={updateUserName}
        >
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
          <FormRow
            name="username"
            type="text"
            label={isArabic ? "اسم المستخدم" : "Username"}
          />
          <FormRow
            name="phone"
            type="number"
            label={isArabic ? "رقم الهاتف" : "Phone"}
          />
          <FormRow
            name="birthDayYear"
            type="text"
            label={isArabic ? "سنة الميلاد" : "Birthday"}
          />
          <CtaButton
            text={
              isSubmitting
                ? isArabic
                  ? "انتظر"
                  : "Saving..."
                : isArabic
                ? "حفظ التعديلات"
                : "Save Changes"
            }
            type="submit"
          />
        </Form>
      </div>
    </Wrapper>
  );
};
export default EditProfile;
