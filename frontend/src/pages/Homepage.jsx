import { Page, HeroSwiper, BestSellersCarousel } from "../components/index";

const Homepage = () => {
  return (
    <Page>
      <HeroSwiper />
      <h2 className="mt-20 text-xl tracking-tighter text-center">
        Find below our best seller <span className="text-secondary">tech</span>{" "}
        products
      </h2>
      <BestSellersCarousel />
    </Page>
  );
};
export default Homepage;
