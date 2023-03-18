import { useNavigate } from "react-router-dom";

const Heading = ({ text, className, button, address, optionalText }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div
        className={
          `bg-white w-full rounded-sm shadow-sm shadow-stone-200 p-2 ${
            button && "pl-16"
          } ` + className
        }
      >
        <h2 className="tracking-tighter uppercase">
          {text} <span className="text-xs lowercase ml-1">{optionalText}</span>
        </h2>
      </div>
      {button && (
        <button className="back-button" onClick={() => navigate(address)}>
          Back
        </button>
      )}
    </div>
  );
};
export default Heading;
