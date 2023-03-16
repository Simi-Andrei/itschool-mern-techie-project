import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Heading, Page, Wrapper } from "../components/index";
import { placeOrder, reset } from "../features/order/orderSlice";
import { clearCart } from "../features/cart/cartSlice";

const Placeorderpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, deliveryAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );

  const { order, loading, success, error, message } = useSelector(
    (state) => state.order
  );

  const { currentUser } = useSelector((state) => state.user);

  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryPrice = itemsPrice > 25 ? 0 : 25;
  const totalPrice = itemsPrice + deliveryPrice;

  const placeOrderHandler = () => {
    dispatch(
      placeOrder({
        items: cartItems,
        deliveryAddress,
        paymentMethod,
        itemsPrice: itemsPrice.toFixed(2),
        deliveryPrice,
        totalPrice: totalPrice.toFixed(2),
      })
    );
  };

  useEffect(() => {
    if (success && order._id) {
      dispatch(reset());
      navigate(`/orders/${order._id}`);
      dispatch(clearCart());
      toast.success("Order placed", {
        position: "top-center",
        autoClose: 2000,
      });
    } else if (!currentUser || !order.items) {
      navigate("/login");
    }
  }, [dispatch, navigate, success, order, currentUser]);

  return (
    <Page>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-[64.2%]">
          <Heading text="Summary" button address={-1} />
          <Wrapper>
            <span>
              <strong>Delivery address</strong>
            </span>
            <p>
              <span>{deliveryAddress.address}</span>,{" "}
              <span>{deliveryAddress.city}</span>,{" "}
              <span>{deliveryAddress.postalCode}</span>,{" "}
              <span>{deliveryAddress.country}</span>
            </p>
          </Wrapper>
          <Wrapper>
            <span>
              <strong>Payment method</strong>
            </span>
            <p>{paymentMethod}</p>
          </Wrapper>
          <Wrapper>
            <span>
              <strong>Products</strong>
            </span>
            <div>
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between mt-2 pb-2 border-b border-b-secondary last:border-b-0 text-xs xl:text-sm"
                >
                  <div className="w-3/12 grid place-items-center">
                    <img src={item.image} alt="product" width={50} />
                  </div>
                  <div className="w-6/12 text-center">
                    <Link
                      className="hover:underline"
                      to={`/product/${item._id}`}
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="w-3/12 text-center">
                    <p>
                      ${(item.quantity * item.price).toFixed(2)} (x
                      {item.quantity})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
        <div className="w-full mt-1 md:mt-0 md:w-[35.4%]">
          <Heading text="Total" />
          <Wrapper>
            {cartItems.length > 0 && (
              <div className="flex flex-col">
                <div className="flex items-center justify-between my-2">
                  <p>Products price:</p>
                  <p className="font-semibold">${itemsPrice.toFixed(2)}</p>
                </div>
                <div className="flex flex-col  border-b border-b-secondary pb-2">
                  <div className="flex items-center justify-between">
                    <p>Delivery price:</p>
                    <p className="font-semibold">${deliveryPrice.toFixed(2)}</p>
                  </div>
                  <p className="italic text-xxs xl:text-xs">
                    (free delivery for orders above $50)*
                  </p>
                </div>
                <div className="flex items-center justify-between font-semibold mt-2">
                  <p>Total price:</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="text-center">
                  {error && <p className="mt-6">{message}</p>}
                  <button
                    onClick={placeOrderHandler}
                    className="w-full bg-stone-900 text-white py-2 px-4 hover:bg-stone-800 disabled:opacity-50 mt-4"
                    disabled={cartItems.length === 0}
                  >
                    {loading ? "Placing order..." : "Place order"}
                  </button>
                </div>
              </div>
            )}
          </Wrapper>
        </div>
      </div>
    </Page>
  );
};
export default Placeorderpage;
