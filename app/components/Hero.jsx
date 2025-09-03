// components/Hero.tsx
import Image from "next/image";
import cardImg from "../../public/images/card.png";
import playBtn from "../../public/images/play.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="w-full bg-[#5B21B6] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-0 md:text-center">
        {/* Tagline */}
        <p className="text-sm md:text-base font-semibold text-[#E9D7FE] tracking-wide mb-4">
          Super. Simple. Banking.
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Banking technology <br /> that has your back.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#E9D7FE] max-w-2xl mx-auto mb-8">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-col md:flex-row-reverse md:justify-center gap-4 mb-16">
          <Link
            href="#"
            className="w-full md:w-auto rounded-md bg-[#7F56D9] text-white px-5 py-2 font-semibold shadow hover:opacity-90 transition text-center"
          >
            Sign up
          </Link>
          <Link
            href="#"
            className="w-full md:w-auto rounded-md bg-white text-[#344054] px-4 py-2 font-semibold shadow hover:opacity-90 transition text-center"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src={playBtn} alt="play btn" />
              <span>Demo</span>
            </div>
          </Link>
        </div>

        {/* Credit Card Mockup */}
        <div className="relative w-[300px] md:w-full max-w-5xl mx-auto h-[180px] lg:h-[350px]">
          <Image
            src={cardImg}
            alt="Credit card mockup"
            fill
            className="object-fit-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
