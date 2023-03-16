import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../components/index";
import Carousel from "react-multi-carousel";
import { toast } from "react-toastify";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeartFill } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { getTopProducts } from "../features/product/productSlice";
import { addItemToCart } from "../features/cart/cartSlice";
import {
  addItemToFavorites,
  removeItemFromFavorites,
} from "../features/favorites/favoritesSlice";

const BestSellersCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);

  const addItemToCartHandler = (id) => {
    dispatch(addItemToCart(id));
    toast.success("Product added to cart", {
      position: "top-center",
      autoClose: 2000,
    });
  };

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

  const { topProducts } = useSelector((state) => state.product);

  const { favoriteItems } = useSelector((state) => state.favorites);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mt-8">
      <Carousel
        showDots={true}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
      >
        {topProducts.map((product) => (
          <div key={product._id} className="flex justify-center">
            <div
              className="bg-white w-[90%] shadow-sm shadow-stone-200 rounded-sm p-2 pt-6 mb-1 relative"
              key={product._id}
            >
              <div className="">
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
                  <div className="mt-4 flex items-center justify-end">
                    <button
                      onClick={() => addItemToCartHandler(product._id)}
                      className="w-full bg-stone-900 rounded-sm uppercase text-white text-xs py-2 px-4 hover:bg-stone-800 disabled:bg-stone-500 flex items-center justify-center"
                      disabled={product.stock === 0}
                    >
                      <RiShoppingCartLine className="text-[0.9rem] mr-1" />
                      <span className="ml-1">
                        {product.stock === 0 ? "Out of stock" : "Add to cart"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleFavoriteItemHandler(product._id)}
                className="absolute top-0 right-0 rounded-md mt-2 mr-2 p-2 shadow-inner bg-white"
              >
                <BsHeartFill
                  fill={`${
                    favoriteItems.find((item) => item._id === product._id)
                      ? "#d4be8a"
                      : "#e7e5e4"
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default BestSellersCarousel;
