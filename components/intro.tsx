import { CMS_NAME } from "../lib/constants";
import Image from "next/image";
import logoMain from "/public/logos/mr-dibbs-logo.svg"
import cn from 'classnames'


const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        This Is Not A Drill
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Image
          src={logoMain}
          alt="Main Logo"
          className=""
          width={200}
          height={200}
        />
      </h4>
    </section>
  );
};

export default Intro;
