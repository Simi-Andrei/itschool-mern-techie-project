import {
  Page,
  HeroSwiper,
  BestSellersCarousel,
  ContactForm,
} from "../components/index";

const Homepage = () => {
  return (
    <Page>
      <h2 className="mt-20 text-2xl md:text-3xl tracking-tighter text-center font-semibold">
        We <span className="text-secondary">tech</span> it, you take it
      </h2>
      <HeroSwiper />
      <h2 className="mt-20 text-xl tracking-tighter text-center">
        Find below our best selling <span className="text-secondary">tech</span>{" "}
        products
      </h2>
      <BestSellersCarousel />
      <ContactForm />
    </Page>
  );
};
export default Homepage;
