import Link from "next/link";
import Image from "next/image";
import logoMain from "/public/logos/mr-dibbs-logo.svg"

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      {<Image
          src={logoMain}
          alt="Main Logo"
          className=""
          width={200}
          height={200}
        />}
    </section>
  );
};

export default Header;
