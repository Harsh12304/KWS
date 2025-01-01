"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Brands data array
const brandsData = [
  { id: 1, image: "/karak-makani.png", name: "karak-makani " },
  { id: 2, image: "/metro-medical.png", name: "metro-medical" },
  { id: 3, image: "/dadabhai-travel.png", name: "dadabhai-travel" },
  { id: 4, image: "/khaugalli.png", name: "khaugalli" },
  { id: 5, image: "/nukkad.png", name: "nukkad" },
  { id: 6, image: "/universal.png", name: "universal" },
  { id: 7, image: "/badr.png", name: "badr" },
];

const Brands = () => {
  const [shuffledBrands, setShuffledBrands] = useState([
    ...brandsData,
    ...brandsData,
  ]); // Duplicate for seamless scrolling

  useEffect(() => {
    // Shuffle the array periodically
    const shuffleInterval = setInterval(() => {
      setShuffledBrands((prev) => {
        const firstHalf = prev.slice(0, brandsData.length);
        const shuffled = firstHalf.sort(() => Math.random() - 0.5);
        return [...shuffled, ...shuffled]; // Duplicate again for seamless effect
      });
    }, 20000); // Shuffle every 20 seconds
    return () => clearInterval(shuffleInterval);
  }, []);

  return (
    <section className="pt-12 overflow-hidden uppercase bg-[#EDDCB9]">
      <div className="container mx-auto px-4 mb-16">
        {/* Heading Section */}
        <div className="text-center mb-16 w-full h-[20vh] flex flex-col items-center justify-center">
          <p className="text-[16px] md:text-[20px] text-[#193540] leading-[1.5] -mt-2">
            Trusted Collaborative Allies
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#000]">
            Our Partners
          </h2>
          <img src="/partners.png" alt="Partners Logo" />
        </div>

        {/* Scrolling Brands Section */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {shuffledBrands.map((brand, index) => (
              <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SingleBrand = ({ brand }) => {
  const { image, name } = brand;

  const containerClasses = `relative aspect-square w-32 h-32 lg:w-48 lg:h-48 opacity-100 transition shadow-none flex items-center justify-center`;

  return (
    <div className={containerClasses}>
      <Image src={image} alt={`${name} Logo`} fill className="object-contain" />
    </div>
  );
};

export default Brands;
