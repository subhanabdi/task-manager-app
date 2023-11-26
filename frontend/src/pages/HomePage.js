import Wrapper from "../assets/wrappers/homePageWrapper";
import MainSvg from "../utils/svgs/MainSvg";

import bigcover from "../assets/images/bigcover.png";
import insidecover from "../assets/images/insidecover.png";

import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { languageActions } from "../store/index";

const HomePage = () => {
  const language = useSelector((state) => state.langPreference.langPreference);
  const dispatch = useDispatch();

  const isArabic = language === "ar";

  const toggleLanguage = () => {
    if (language === "ar") {
      localStorage.setItem("language", "en");
      dispatch(languageActions.setLangPreference({ langPreference: "en" }));
    } else {
      localStorage.setItem("language", "ar");
      dispatch(languageActions.setLangPreference({ langPreference: "ar" }));
    }
  };

  return (
    <Wrapper>
      <img src={bigcover} alt="cover" className="img" />
      <div className="main-container">
        <main className="inside-main">
          <div className="image-container">
            <img
              src={insidecover}
              alt="inside cover"
              className="inside-image"
            />
            <div className="inside-image-container">
              <div className="inside-image-container-content">
                <div>
                  <MainSvg />
                </div>
                <h2 className="inside-image-container-content-text">
                  Your Notes
                </h2>
              </div>
            </div>
            <span className="lang" onClick={toggleLanguage}>
              {isArabic ? "En" : "Ar"}
            </span>
          </div>
          <Outlet />
        </main>
      </div>
    </Wrapper>
  );
};
export default HomePage;
