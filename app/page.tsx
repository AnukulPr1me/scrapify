import React from "react";
import Image from "next/image";
function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Shop high-quality Productat unbeatable prices.
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unlock the power of
              <span className="text-primary"> Scrapify</span>
            </h1>
            <p className="mt-6">
              Welcome to Scrapify, your go-to tool for tracking Amazon prices.
              Easily get high, low, and current prices for any product. Make
              smarter purchasing decisions with Scrapify!
            </p>
            Searchbar
          </div>
          HeroCarousel
        </div>
      </section>
    </>
  );
}

export default Home;
