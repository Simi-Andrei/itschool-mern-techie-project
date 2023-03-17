import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Heading, Page } from "../components/index";
import { getProductCategories } from "../features/product/productSlice";

const Categoriespage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state.product);

  return (
    <Page>
      <Heading text="Categories" button address={-1} />
      <div className="flex flex-wrap items-start justify-between mt-1">
        {categories.map((category) => {
          switch (category) {
            case "inEarHeadphones":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/inEarHeadphones"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Headphones
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/inEar1.png"
                        alt="headphones"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "watches":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/watches"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Watches
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/watch1.png"
                        alt="watch"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "onEarHeadsets":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/onEarHeadsets"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Headsets
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/onEar1.png"
                        alt="headset"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "speakers":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/speakers"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Speakers
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/speaker1.png"
                        alt="speaker"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "mouses":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/mouses"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Mouses
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/mouse1.png"
                        alt="mouse"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "webcams":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/webcams"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Webcams
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/webcam1.png"
                        alt="webcam"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "cams":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/cams"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Cameras
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/camera1.png"
                        alt="cam"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            case "mics":
              return (
                <Link
                  className="w-full md:w-[49.9%] group mb-0.5"
                  key={category}
                  to="/search/category/mics"
                >
                  <div className="gradient group-hover:brightness-95 rounded-sm bg-white grid place-items-center h-44 border relative shadow-sm shadow-stone-200">
                    <p className="absolute bottom-1 left-2 uppercase text-white">
                      Microphones
                    </p>
                    <div className="bg-white rounded-full p-3">
                      <img
                        src="/images/productImages/mic1.png"
                        alt="mic"
                        className="w-[100px] md:w-[120px]"
                      />
                    </div>
                  </div>
                </Link>
              );
            default:
              return (
                <li key={category}>
                  <p></p>
                </li>
              );
          }
        })}
      </div>
    </Page>
  );
};
export default Categoriespage;
