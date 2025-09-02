// components/Hero.tsx
import Image from "next/image";
import cardImg from "../../public/images/card.png";
import playBtn from "../../public/images/play.png";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative w-full bg-[#5B21B6] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-0 text-center">
        {/* Tagline */}
        <p className="text-base font-semibold text-[#E9D7FE] tracking-wide mb-4">
          Super. Simple. Banking.
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Banking technology <br /> that has your back.
        </h1>

        {/* Subheading */}
        <p className="text-xl text-[#E9D7FE] max-w-2xl mx-auto mb-8">
          Simple, transparent banking. No hidden fees and free overdrafts.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-16">
          <Link
            href="#"
            className="rounded-md bg-white text-[#344054] px-4 py-2 font-semibold shadow hover:opacity-90 transition"
          >
            <div className="flex items-center gap-1">
              <Image src={playBtn} alt="play btn" />
              <span>Demo</span>
            </div>
          </Link>
          <Link
            href="#"
            className="rounded-md bg-[#7F56D9] text-[#fff] px-5 py-2 font-semibold shadow hover:opacity-90 transition"
          >
            Sign up
          </Link>
        </div>

        {/* Credit Card Mockup */}
        <div className="relative w-full max-w-5xl mx-auto h-[280px] lg:h-[350px]">
          <Image
            src={cardImg}
            alt="Credit card mockup"
            fill
            className="object-fit"
            priority
          />
        </div>
      </div>
    </section>
  );
}
