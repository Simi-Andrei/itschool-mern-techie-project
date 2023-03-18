const SecondaryButton = ({ text, className, onClick, disabled, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn-secondary ` + className}
    >
      {text}
    </button>
  );
};
export default SecondaryButton;
