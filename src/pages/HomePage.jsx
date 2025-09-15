import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import OfferCard from "../components/OfferCard";

import { offerCardInfo } from "../constants";

const HomePage = () => {
  return (
    <div className="mx-20 mt-48">
      <div className="mx-auto flex max-w-full justify-between border-b-2 border-base-content/10">
        <div className="mx-auto max-w-xl basis-1/2 flex-col content-center">
          <h1 className="mb-4 text-center text-3xl font-semibold">Purpose</h1>
          <p className="text-center text-xl text-base-content/70">
            Dedicated to the preservation and restoration of Chrysler Products
            of North American origin including Chrysler, Imperial, DeSoto,
            Fargo, Chalmers, Dodge, Graham Brothers, Plymouth, Jeep and Valiant.
          </p>
        </div>
        <div className="mb-10 flex basis-1/2 justify-center">
          <img className="rounded-3xl" src={car1} height="650" width="650" />
        </div>
      </div>

      <div className="mx-auto flex max-w-full justify-between border-b-2 border-base-content/10">
        <div className="my-10 flex basis-1/2 justify-center">
          <img className="rounded-3xl" src={car2} height="650" width="650" />
        </div>
        <div className="mx-auto max-w-xl basis-1/2 flex-col content-center">
          <h1 className="mb-4 text-center text-3xl font-semibold">Welcome</h1>
          <p className="text-center text-xl text-base-content/70">
            The Chrysler Restorers Club of New Zealand club was formed in August
            1976 by members dedicated to the preservation and restoration of
            Chrysler Products of North American origin. The club has members
            through out New Zealand.
          </p>
        </div>
      </div>

      <div className="mx-8 my-10 flex justify-between">
        {offerCardInfo.map((info) => (
          <OfferCard key={info} {...info} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
