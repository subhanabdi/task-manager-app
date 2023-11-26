const CtaButton = ({ text, Icon, type, onClick, disabled }) => {
  return (
    <button
      className="cta-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{text}</p>
      {Icon && <Icon />}
    </button>
  );
};
export default CtaButton;
