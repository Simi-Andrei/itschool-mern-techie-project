import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { Heading, Loader, Page, Wrapper } from "../components/index";
import { getProfile, updateProfile, reset } from "../features/user/userSlice";
import { getOrders } from "../features/order/orderSlice";

const Profilepage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser, loading, success, error, message } = useSelector(
    (state) => state.user
  );

  const {
    orders,
    loading: loadingOrders,
    error: errorOrders,
    message: messageOrders,
  } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(reset());
    dispatch(getOrders());
    if (!currentUser) {
      navigate("/login");
    } else if (error) {
      toast.error(message, {
        position: "top-center",
        autoClose: 2000,
      });
    } else if (success) {
      toast.success("Profile updated", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      if (!currentUser.name) {
        dispatch(getProfile("profile"));
      } else {
        setName(currentUser.name);
        setEmail(currentUser.email);
      }
    }
  }, [dispatch, currentUser, navigate, error, success, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      dispatch(updateProfile({ id: currentUser._id, name, email, password }));
    }
  };

  return (
    <Page>
      <Heading text="Profile" button address={-1} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="w-full mt-40 text-center">
          <p>{message}</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-[29.3%] xl:w-[23.3%]">
            <Wrapper>
              <form onSubmit={submitHandler} autoComplete="off">
                <h3 className="text-base text-center my-10 cursor-default">
                  Edit information
                </h3>
                <div className="form-group my-8 relative w-full md:w-1/2 lg:w-full mx-auto">
                  <input
                    className="form-input bg-transparent border-b border-b-cream pt-2 focus:outline-none w-full"
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider opacity-50 transition-all duration-200 pointer-events-none"
                  >
                    Name
                  </label>
                </div>
                <div className="form-group my-8 relative w-full md:w-1/2 lg:w-full mx-auto">
                  <input
                    className="form-input bg-transparent border-b border-b-cream pt-2 focus:outline-none w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider opacity-50 transition-all duration-200 pointer-events-none"
                  >
                    Email
                  </label>
                </div>
                <div className="form-group my-8 relative w-full md:w-1/2 lg:w-full mx-auto">
                  <input
                    className="form-input bg-transparent border-b border-b-cream pt-2 focus:outline-none w-full"
                    type="password"
                    id="password"
                    name="password"
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider opacity-50 transition-all duration-200 pointer-events-none"
                  >
                    Password
                  </label>
                </div>
                <div className="form-group my-8 relative w-full md:w-1/2 lg:w-full mx-auto">
                  <input
                    className="form-input bg-transparent border-b border-b-cream pt-2 focus:outline-none w-full"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder=" "
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <label
                    htmlFor="confirmPassword"
                    className="form-label block absolute cursor-text bottom-0.5 left-0 tracking-wider opacity-50 transition-all duration-200 pointer-events-none"
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="md:w-1/2 lg:w-full mx-auto">
                  <button
                    className="w-full bg-secondary text-white shadow-sm shadow-stone-200 tracking-tighter py-2 px-4 hover:brightness-95 disabled:opacity-50 rounded-sm"
                    type="submit"
                    disabled={!name && !email && !password && !confirmPassword}
                  >
                    {loading
                      ? "Updating..."
                      : !name && !email && !password && !confirmPassword
                      ? "Nothing to update"
                      : "Update"}
                  </button>
                </div>
              </form>
            </Wrapper>
          </div>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <div className="w-full text-center mt-20">
              <p>{messageOrders}</p>
            </div>
          ) : (
            <div className="w-full lg:w-[70.3%] xl:w-[76.3%] mt-1">
              <Heading text="My orders" />
              <Wrapper>
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full py-2">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left font-light">
                        <thead className="border-b">
                          <tr>
                            <th scope="col" className="p-3">
                              Date
                            </th>
                            <th scope="col" className="p-3">
                              Total
                            </th>
                            <th scope="col" className="p-3">
                              Paid
                            </th>
                            <th scope="col" className="p-3">
                              Delivered
                            </th>
                            <th scope="col" className="p-3">
                              Details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((order) => (
                            <tr className="border-b" key={order._id}>
                              <td className="whitespace-nowrap p-3">
                                {order.createdAt.substring(0, 10)}
                              </td>
                              <td className="whitespace-nowrap p-3">
                                ${order.totalPrice.toFixed(2)}
                              </td>
                              <td className="whitespace-nowrap p-3">
                                {order.isPaid ? (
                                  <FaCheck className="text-green-400" />
                                ) : (
                                  <FaTimes className="text-rose-400" />
                                )}
                              </td>
                              <td className="whitespace-nowrap p-3">
                                {order.isDelivered ? (
                                  order.deliveredAt.substring(0, 10)
                                ) : (
                                  <FaTimes className="text-rose-400" />
                                )}
                              </td>
                              <td className="whitespace-nowrap p-3">
                                <Link
                                  to={`/orders/${order._id}`}
                                  className="hover:underline"
                                >
                                  Details
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Wrapper>
            </div>
          )}
        </div>
      )}
    </Page>
  );
};
export default Profilepage;
