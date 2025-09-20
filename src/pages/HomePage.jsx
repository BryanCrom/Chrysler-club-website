import car1 from "../assets/car1.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";
import top from "../assets/chrysler-building.png";
import membership_form from "../assets/MEMBERSHIP APPLICATION.pdf";

import OfferText from "../components/OfferText";
import TextBlock from "../components/TextBlock";
import Border from "../components/Border";

import { offerInfo, homePageInfo } from "../constants";

const HomePage = () => {
  return (
    <div className="mx-5 mt-32 max-w-6xl md:mt-44 xl:mx-auto">
      <div className="my-5">
        <Border>
          <img src={top} height="100%" width="100%" />
        </Border>
      </div>

      <div className="my-5 max-w-full">
        <Border>
          <TextBlock
            title={homePageInfo.welcome.title}
            description={homePageInfo.welcome.description}
          />
        </Border>
      </div>

      <div className="my-5 flex max-w-full flex-col-reverse gap-5 lg:flex-row">
        <div className="grow basis-1/2">
          <Border>
            <TextBlock
              title={homePageInfo.purpose.title}
              description={homePageInfo.purpose.description}
            />
          </Border>
        </div>
        <div className="h-full grow basis-1/2">
          <Border>
            <img src={car3} height="100%" width="100%" />
          </Border>
        </div>
      </div>

      <div className="xl:grid-rows-auto my-5 grid max-w-full justify-between gap-5 xl:grid-cols-2">
        <Border>
          <img src={car1} height="100%" width="100%" />
        </Border>
        <div className="order-last">
          <Border>
            <img src={car4} height="100%" width="100%" />
          </Border>
        </div>
        <div className="row-span-2">
          <Border>
            <div className="flex h-full flex-col items-center justify-between">
              <h1 className="mb-4 text-center text-3xl font-bold underline">
                What We Offer
              </h1>
              {offerInfo.map((info, index) => (
                <div key={index} className="my-4">
                  <OfferText {...info} />
                </div>
              ))}
            </div>
          </Border>
        </div>
      </div>

      <div className="my-5">
        <Border>
          <h1 className="mb-4 text-center text-3xl font-bold underline">
            Membership
          </h1>
          <p className="mb-4 text-center text-xl">
            The annual membership cost is $50 for individuals and $55 for
            families. The membership includes 6 magazines a year, access to the
            spare parts, access to the club library, and events organised by the
            club.
          </p>

          <p className="my-2 text-center text-xl">
            To Join the Chrysler Club please{" "}
            <a
              className="text-blue-700 underline"
              href={membership_form}
              target="_blank"
            >
              Click Here
            </a>{" "}
            to download the membership form. To Print: Open the link and RIGHT
            CLICK, select PRINT, then fill the form and mail it to Po Box 75-673
            Manurewa, Auckland 2243 or email it to{" "}
            <a
              className="mktNoTrack break-words text-blue-700 underline"
              href="mailto:chryslerrestorersclubnz@gmail.com"
            >
              chryslerrestorersclubnz@gmail.com
            </a>
          </p>
        </Border>
      </div>
    </div>
  );
};

export default HomePage;
