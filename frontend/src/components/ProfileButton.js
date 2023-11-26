import Wrapper from "../assets/wrappers/profileBtnWrapper";

const ProfileButton = ({ text, link, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <a href={link}>{text}</a>
    </Wrapper>
  );
};
export default ProfileButton;
