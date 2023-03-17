import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-200 border-t border-t-stone-200">
      <div className="w-full lg:w-8/12 mx-auto flex flex-wrap items-start justify-between text-xxs xl:text-sm p-4 pb-0">
        <div className="w-1/2 p-2 min-h-[76px]">
          <p>Contact</p>
          <p className="flex items-center">
            <BsFillTelephoneFill className="mr-1" />
            +40 757 849 820
          </p>
          <p className="flex items-center">
            <MdEmail className="mr-1" />
            <a href="mailTo: simigiuandrei@gmail.com">techie@gmail.com</a>
          </p>
        </div>
        <div className="w-1/2 p-2 min-h-[76px]">
          <p>Accepted payment methods:</p>
          <img src="/images/paypal.png" alt="paypal" className="w-16" />
        </div>
        <div className="w-1/2 p-2 min-h-[76px] flex items-end justify-start">
          Copyright &copy; | All rights reserved.
        </div>
        <div className="w-1/2 p-2 min-h-[76px] flex items-end justify-start">
          <div>
            <p>Find us on social media:</p>
            <p className="flex">
              <Link to="/">
                <FaFacebookSquare className="text-xl mr-1" fill="#d4be8a" />
              </Link>
              <Link to="/">
                <FaLinkedin className="text-xl mr-1" fill="#d4be8a" />
              </Link>
              <Link to="/">
                <FaTwitterSquare className="text-xl mr-1" fill="#d4be8a" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
