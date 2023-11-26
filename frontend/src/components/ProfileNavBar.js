import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Wrapper from "../assets/wrappers/profileNavBarWrapper";
import ProfileButton from "./ProfileButton";
import cancel from "../assets/images/cancle.svg";

const ProfileNavBar = () => {
  const language = useSelector((state) => state.langPreference.langPreference);
  const isArabic = language === "ar";
  const navigate = useNavigate();

  const newUserNameObj = useSelector((state) => state.userName);
  const newUserName = newUserNameObj.userName;

  const logoutHandler = () => {
    // localStorage.removeItem("token");
    localStorage.removeItem("darkTheme");

    navigate("/");
  };

  return (
    <Wrapper>
      <div className="profile-navbar-container">
        {/* <div className="cancel-container">
          <img src={cancel} alt="cancel-btn" className="cancel-inside" />
        </div> */}

        <p className="user-greet">
          {isArabic ? `${newUserName} مرحباً ` : `Hi ${newUserName}`}
        </p>
        <ProfileButton
          text={isArabic ? "تعديل بيانات الحساب " : "Modify User info"}
          link="dashboard/edit-profile"
        />
        <ProfileButton
          text={isArabic ? "تسجيل الخروج" : "Logout"}
          onClick={logoutHandler}
        />
      </div>
    </Wrapper>
  );
};
export default ProfileNavBar;
