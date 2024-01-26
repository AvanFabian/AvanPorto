import Image from "next/image";
import Link from "next/link";
import { PiHouseLight, PiGithubLogoLight } from "react-icons/pi";

function page() {
  return (
    <>
      <div className="p-5 self-center flex flex-col items-center mx-auto w-full ">
        {/* <div className="bg-neutral-600 rounded-full ">
          <Image
            height={1000}
            width={1000}
            className="object-cover w-fit"
            src="/emo.png"
            alt=""
          />
        </div> */}
        <h1 className="SpaceGroteskBold text-6xl text-center my-5 btn-shine">
          Avan Fabian
        </h1>

        <p className="text-neutral-400 lg:max-w-lg text-center SpaceGroteskBold ">
          Website Development, App Development Learner, Data Science & ML/AI Enthusiast
        </p>
        <div className="w-fit my-5 hover:bg-[#282828] duration-200 transition-all ease-in hover:text-[#f2f2f2] flex border border-neutral-600 rounded-2xl p-4 gap-x-5 text-[#282828]">
          <Link href={"/dashboard"} className="flex flex-row gap-2 ">
            <span>
              <PiHouseLight className="text-2xl" />
            </span>
            <span>
              Enter Main Page
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
