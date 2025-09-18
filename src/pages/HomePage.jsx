import car1 from "../assets/car1.jpg";
import car2 from "../assets/car3.jpg";
import top from "../assets/chrysler-building.png";

import OfferCard from "../components/OfferCard";
import TextBlock from "../components/TextBlock";
import Border from "../components/Border";

import { offerCardInfo, homePageInfo } from "../constants";

const HomePage = () => {
  return (
    <div className="m-10 mx-auto mt-48 max-w-6xl">
      <Border>
        <img src={top} height="100%" width="100%" />
      </Border>

      <div className="my-10 max-w-full">
        <Border>
          <TextBlock
            title={homePageInfo.welcome.title}
            description={homePageInfo.welcome.description}
          />
        </Border>
      </div>

      <div className="my-10 flex max-w-full justify-between gap-10">
        <div className="grow basis-1/2">
          <Border>
            <TextBlock
              title={homePageInfo.purpose.title}
              description={homePageInfo.purpose.description}
            />
          </Border>
        </div>
        <div className="basis-1/2">
          <Border>
            <img src={car2} />
          </Border>
        </div>
      </div>

      <Border>
        <img src={car1} height="100%" width="100%" />
      </Border>

      <div className="mx-8 my-10 flex justify-between">
        {offerCardInfo.map((info) => (
          <OfferCard {...info} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
