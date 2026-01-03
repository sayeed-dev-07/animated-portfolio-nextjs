
import TextBorderAnimation from "@/components/borderText";

import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="px-3 py-6 min-h-[calc(100vh-6rem)] justify-between max-w-350 mx-auto flex flex-col">
      <div>
        <div className="flex items-center gap-x-6">
          <p className="lg:text-6xl sm:text-4xl text-2xl">SOCIAL NETWORKS </p><RiArrowRightDownLine className="lg:text-7xl sm:text-5xl text-3xl" />
        </div>
      </div>
      <div className="first">
        <div className="flex font-medium text-2xl flex-col items-end">
          <a target="_blank" href="https://www.facebook.com/sayeed.shorif.2025">
          <TextBorderAnimation text="Facebook"/>
          </a>
          <a target="_blank" href="https://github.com/sayeed-dev-07">
          <TextBorderAnimation text="Github"/>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/sayeed-shorif-68080234b/">
          <TextBorderAnimation text="LinkedIn"/>
          </a>
          <a target="_blank"
            href="mailto:expsayeedshorif@gmail.com?subject=Project%20Inquiry&body=Hi%20Sayeed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0ARegards%2C"
          >
            <TextBorderAnimation text="expsayeedshorif@gmail.com"/>
          </a>

        </div>
      </div>
      <div className="second">
        <div className="">
          <p className="text-xl ">Get a Project in Mind?</p>
          <div className="flex items-center justify-between">
            <p className="lg:text-8xl sm:text-6xl text-5xl">LET&apos;S TALK</p>
            <RiArrowRightUpLine className="lg:text-9xl sm:text-7xl text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;