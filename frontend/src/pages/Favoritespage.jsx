import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import { BsArrowRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { PrimaryButton, Rating, Page, Wrapper } from "../components/index";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";
import { removeItemFromFavorites } from "../features/favorites/favoritesSlice";

const Favoritespage = () => {
  const dispatch = useDispatch();

  const { favoriteItems } = useSelector((state) => state.favorites);

  const addItemToCartHandler = (id) => {
    dispatch(addItemToCart(id));
    toast.success("Product added to cart", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const removeItemFromFavoritesHandler = (id) => {
    dispatch(removeItemFromFavorites(id));
    toast.success("Product removed from favorites", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <Page>
      {favoriteItems.length === 0 ? (
        <div className="bg-white w-full flex flex-col items-center justify-center shadow-sm shadow-stone-200">
          <div className="flex flex-col lg:flex-row items-center">
            <p className="mr-4 tracking-tighter text-center">
              You have no favorite products right now
            </p>
          </div>
          <Link
            to="/categories"
            className="bg-secondary uppercase border border-secondary text-white font-light my-4 py-2 px-8 tracking-widest hover:text-secondary hover:bg-white transition-all duration-200 flex items-center relative group rounded-sm text-sm"
          >
            Back to shop
            <span className="absolute top-1/2 -translate-y-1/2 right-2 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 text-secondary">
              <BsArrowRight />
            </span>
          </Link>
        </div>
      ) : (
        <div>
          <Heading text="Favorites" button address={-1} />
          <div className="flex flex-wrap items-start justify-between">
            {favoriteItems.map((product) => (
              <div
                className="w-full md:w-[32.9%] xl:w-[24.7%]"
                key={product._id}
              >
                <Wrapper className="pt-6 relative">
                  <div className="flex items-start justify-between md:block">
                    <div className="grid place-items-center">
                      <Link to={`/product/${product._id}`}>
                        <img
                          src={product.image}
                          alt="product"
                          className="w-[90px] md:w-[90px] lg:w-[140px]"
                        />
                      </Link>
                    </div>
                    <div className="text-right md:text-left mt-2 md:mt-0">
                      <Link
                        to={`/product/${product._id}`}
                        className="relative hover:underline"
                      >
                        <p className="tracking-tighter text-sm mt-4">
                          {product.name}
                        </p>
                      </Link>
                      <p className="tracking-tighter cursor-default my-1 text-lg">
                        ${product.price}
                      </p>
                      <div className="w-full flex items-center">
                        <Rating value={product.rating} />{" "}
                        <span className="ml-2 text-xs">
                          {product.numReviews} reviews
                        </span>
                      </div>
                      <div className="mt-2">
                        <PrimaryButton
                          type="button"
                          text={
                            product.stock === 0 ? "Out of stock" : "Add to cart"
                          }
                          onClick={() => addItemToCartHandler(product._id)}
                          disabled={product.stock === 0}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItemFromFavoritesHandler(product._id)}
                    className="bg-white absolute top-0 right-0 rounded-md mt-2 mr-2 p-2 shadow-inner"
                  >
                    <IoMdClose fill="#1c1917" />
                  </button>
                </Wrapper>
              </div>
            ))}
          </div>
        </div>
      )}
    </Page>
  );
};
export default Favoritespage;
