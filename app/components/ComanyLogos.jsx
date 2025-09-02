import Image from "next/image";
import logo1 from "../../public/images/Clogo/companyLogo1.png";
import logo2 from "../../public/images/Clogo/companyLogo2.png";
import logo3 from "../../public/images/Clogo/companyLogo3.png";
import logo4 from "../../public/images/Clogo/companyLogo4.png";
import logo5 from "../../public/images/Clogo/companyLogo5.png";
import logo6 from "../../public/images/Clogo/companyLogo6.png";

const CompanyLogos = () => {
  const images = [
    { src: logo1, alt: "Logo1", width: 182, height: 48 },
    { src: logo2, alt: "Logo2", width: 167, height: 48 },
    { src: logo3, alt: "Logo3", width: 198, height: 48 },
    { src: logo4, alt: "Logo4", width: 166, height: 48 },
    { src: logo5, alt: "Logo5", width: 197, height: 48 },
    { src: logo6, alt: "Logo6", width: 182, height: 48 },
  ];

  return (
    <div className="max-w-8xl mx-auto px-6 py-6 lg:px-8 py-12 space-y-6">
      <p className="text-center text-gray-600 text-base">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
