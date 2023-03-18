const PrimaryButton = ({ text, className, onClick, disabled, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-primary ` + className}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
