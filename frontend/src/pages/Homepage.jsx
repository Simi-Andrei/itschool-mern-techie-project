import {
  Page,
  HeroSwiper,
  BestSellersCarousel,
  ContactForm,
} from "../components/index";

const Homepage = () => {
  return (
    <Page>
      <div className="flex items-center justify-evenly md:justify-center">
        <p className="text-2xl md:text-3xl tracking-tighter text-center font-semibold md:mr-4">
          We <span className="text-secondary">tech</span> it
        </p>
        <div className="bg-secondary p-1 w-16 h-16 rounded-full my-10">
          <div className="bg-stone-900 rounded-full w-full h-full flex flex-col items-center justify-center font-bold">
            <p className="leading-none text-white">
              tech<span className="text-secondary">i</span>e
            </p>
          </div>
        </div>
        <p className="text-2xl md:text-3xl tracking-tighter text-center font-semibold md:ml-4">
          you take it
        </p>
      </div>
      <HeroSwiper />
      <h2 className="mt-10 md:mt-20 text-xl tracking-tighter text-center">
        Find below our best selling <span className="text-secondary">tech</span>{" "}
        products
      </h2>
      <BestSellersCarousel />
      <ContactForm />
    </Page>
  );
};
export default Homepage;
