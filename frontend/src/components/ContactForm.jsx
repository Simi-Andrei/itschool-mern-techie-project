import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_glkn5rf",
        "template_8tdaqvr",
        form.current,
        "9GtFhlBRMrbqBe2Q2"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Message sent", {
            position: "top-center",
            autoClose: 2000,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full mt-20 mb-10 border border-gray-200 flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-2 pt-4">
        <div className="bg-secondary p-1 w-16 h-16 rounded-full mb-4">
          <div className="bg-stone-900 rounded-full w-full h-full flex flex-col items-center justify-center font-bold">
            <p className="leading-none text-white">
              tech<span className="text-secondary">i</span>e
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg font-semibold tracking-tighter text-center">
          If you have any concerns you can get in touch with us so we can assist
          with all the information needed!
        </p>
        <p className="text-center text-xs md:text-sm mt-4 tracking-tighter">
          You can also use this form in case you would like to give us your
          feedback about purchased products or your shopping experience!
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 pt-4 md:px-20 grid place-items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full text-xs xl:text-sm"
          autoComplete="off"
        >
          <div className="form-group my-8 relative">
            <input
              type="text"
              name="from_name"
              className="form-input bg-transparent border-b border-b-stone-200 pt-2 focus:outline-none w-full"
              placeholder=" "
              required
            />
            <label className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider transition-all duration-200 pointer-events-none">
              Name
            </label>
          </div>
          <div className="form-group my-8 relative">
            <input
              type="email"
              name="user_email"
              className="form-input bg-transparent border-b border-b-stone-200 pt-2 focus:outline-none w-full"
              placeholder=" "
              required
            />
            <label className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider transition-all duration-200 pointer-events-none">
              Email
            </label>
          </div>
          <div className="form-group my-8 relative">
            <input
              type="text"
              name="message"
              className="form-input bg-transparent border-b border-b-stone-200 pt-2 focus:outline-none w-full"
              placeholder=" "
              required
            />
            <label className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider transition-all duration-200 pointer-events-none">
              Message
            </label>
          </div>
          <input
            type="submit"
            value="Send"
            className="w-full bg-stone-900 text-white py-2 px-4 hover:bg-stone-800 disabled:opacity-50 mt-4 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
