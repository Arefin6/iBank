import Image from "next/image";
import image from "../../public/images/Image.png";
export default function Cta() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center bg-white  overflow-hidden">
        {/* Left Content */}
        <div className="space-y-6 bg-[#53389E] text-white px-32 py-29 rounded-l-3xl">
          <h1 className="text-4xl font-bold">Give us a shot</h1>
          <p className="text-lg max-w-lg text-[#E9D7FE]">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex gap-4 text-base font-semibold">
            <button className="px-6 py-3  bg-white text-gray-700 rounded-xl shadow-md transition hover:cursor-pointer">
              Learn More
            </button>
            <button className="px-6 py-3 bg-[#7F56D9] rounded-xl text-white hover:cursor-pointer transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={image}
            alt="Coding Hero Illustration"
            width={480}
            height={385}
            className="w-full rounded-r-3xl max-w-md md:max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
