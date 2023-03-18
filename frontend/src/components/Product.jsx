import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";
import { BsHeartFill } from "react-icons/bs";
import { PrimaryButton, Rating, Wrapper } from "./index";
import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "../features/favorites/favoritesSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { favoriteItems } = useSelector((state) => state.favorites);

  const addItemToCartHandler = (id) => {
    dispatch(addItemToCart(id));
    toast.success("Product added to cart", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const favoriteItemExists = favoriteItems.find(
    (item) => item._id === product._id
  );

  const toggleFavoriteItemHandler = (id) => {
    const favoriteItemExists = favoriteItems.find((item) => item._id === id);
    if (favoriteItemExists) {
      dispatch(removeItemFromFavorites(id));
      toast.success("Product removed from favorites", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      dispatch(addItemToFavorites(id));
      toast.success("Product added to favorites", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="w-full md:w-[32.6%] xl:w-[24.5%]">
      <Wrapper className="pt-6 relative">
        <div className="flex items-start justify-between md:block">
          <Link to={`/product/${product._id}`}>
            <div className="grid place-items-center">
              <img
                src={product.image}
                alt="product"
                className="w-[90px] md:w-[90px] lg:w-[140px]"
              />
            </div>
          </Link>
          <div className="text-right md:text-left mt-2 md:mt-0">
            <Link
              to={`/product/${product._id}`}
              className="relative hover:underline"
            >
              <p className="tracking-tighter text-sm mt-4">{product.name}</p>
            </Link>
            <p className="tracking-tighter cursor-default my-1 text-lg">
              ${product.price}
            </p>
            <div className="w-full flex items-center h-6">
              <Rating value={product.rating} />{" "}
              <span className="ml-2 text-xs">
                {product.numReviews} review(s)
              </span>
            </div>
            <div className="mt-2">
              <PrimaryButton
                type="button"
                text={product.stock === 0 ? "Out of stock" : "Add to cart"}
                onClick={() => addItemToCartHandler(product._id)}
                disabled={product.stock === 0}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => toggleFavoriteItemHandler(product._id)}
          className="absolute top-0 right-0 rounded-md mt-2 mr-2 p-2 shadow-inner bg-white"
        >
          <BsHeartFill fill={`${favoriteItemExists ? "#d4be8a" : "#e7e5e4"}`} />
        </button>
      </Wrapper>
    </div>
  );
};
export default Product;
