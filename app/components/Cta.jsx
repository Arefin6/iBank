import Image from "next/image";
import image from "../../public/images/Image.png";
export default function Cta() {
  return (
    <section className="max-w-7xl mx-auto px-3 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center bg-white overflow-hidden rounded-xl">
        {/* Left Content */}
        <div className="flex-1 space-y-4 bg-[#53389E] text-white px-10 py-12 lg:px-29 lg:py-32 md:rounded-l-3xl">
          <h1 className="text-3xl md:text-4xl font-bold">Give us a shot</h1>
          <p className="text-sm md:text-lg leading-[24px] max-w-lg text-[#E9D7FE]">
            Join over 4,000+ startups already growing with Untitled.
          </p>

          {/* Buttons wrapper */}
          <div className="flex pt-2 flex-col-reverse gap-3 sm:flex-row sm:gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 rounded-xl shadow-md transition hover:cursor-pointer">
              Learn More
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-[#7F56D9] rounded-xl text-white hover:cursor-pointer transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={image}
            alt="Coding Hero Illustration"
            className="w-[343px] md:w-full lg:h-[415px] rounded-b-2xl lg:rounded-r-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
