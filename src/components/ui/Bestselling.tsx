import React from "react";
import Bestsellingcard from "./Bestsellingcard";

const Bestselling = () => {
  const bestSell = [
    {
      src: "/best1.jpg",
      alt: "dress",
      title: "Limelight",
      description:
        "Step into the world of fashion with Limelight stylish collections.",
      price: 7499,
      category: "Limelight",
      slug:"Fancy embroided"
    },
    {
      src: "/best2.jpg",
      alt: "dress",
      title: "Rangja",
      description:
        "Discover the perfect blend of comfort and style with embroided collections.",
      price: 4599,
      category: "Rangja",
      slug:"Half-white embroided"
    },
    {
      src: "/best3.jpg",
      alt: "dress",
      title: "khaadi",
      description:
        "Indulge in luxury with khaadi exquisite designs and premium fabrics.",
      price: 3999,
      category: "Khaadi",
      slug:"blue-embroided"
    },
    {
      src: "/best4.jpg",
      alt: "dress",
      title: "Alkaram",
      description:
        "Experience timeless elegance with Alkaram exquisite fabrics and designs.",
      price: 5000,
      category: "Alkaram",
      slug:"pink-white"
    },
    {
      src: "/best5.jpg",
      alt: "dress",
      title: "Bonanza Satrangi",
      description:
        "Elevate your style with Bonanza Satrangi Brand where luxury meets comfort in every stitch.",
      price: 3499,
      category: "Bonanza-Satrangi",
      slug:"Black-embroided"
    },
    {
      src: "/best6.jpg",
      alt: "dress",
      title: "Sana Safinaz",
      description:
        "Experience the epitome of luxury with Sana Safinaz stunning collections.",
      price: 3000,
      category: "Sana-Safinaz",
      slug:"yellow-pink emroided"
    },
  ];
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="sm:text-3xl text-2xl font-serif title-font text-mycolorblue mb-4">
          <strong>Best Selling</strong>
        </h1>
        <div className="flex mt-3 justify-center">
          <div className="w-24 h-1 rounded-full bg-mycolorblue/90 inline-flex"></div>
        </div>
      </div>

      {/* ------------------------- */}
      <div className="flex flex-wrap justify-center gap-7">
        {bestSell.map((items: any, i) => (
          <Bestsellingcard
            key={i}
            src={items.src}
            alt={items.alt}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Bestselling;
