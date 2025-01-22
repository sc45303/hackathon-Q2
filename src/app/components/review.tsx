"use client";
import { MdCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Emma R.",
    rating: 5,
    text: "Shop.co has revolutionized my wardrobe. Their attention to detail and commitment to quality is evident in every garment. I'm a customer for life!",
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "I appreciate the wide range of sizes and styles available at Shop.co. It's refreshing to find a store that caters to diverse body types and fashion preferences.",
  },
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(1);

  useEffect(() => {
    const updateVisibleReviews = () => {
      if (window.innerWidth < 768) setVisibleReviews(1);
      else if (window.innerWidth < 1024) setVisibleReviews(2);
      else setVisibleReviews(3);
    };
    updateVisibleReviews();
    window.addEventListener("resize", updateVisibleReviews);
    return () => window.removeEventListener("resize", updateVisibleReviews);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleReviews < reviews.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - visibleReviews
    );
  };

  return (
    <section className="py-16 bg-gray-50 font-satoshi max-w-[1440px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-Bold text-start mb-12">Our Happy Customers</h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(100 / visibleReviews) * currentIndex}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-3"
                  style={{ flex: `0 0 ${100 / visibleReviews}%` }}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-md h-full hover:scale-105 transition-transform duration-300">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-semibold">{review.name}</span>
                      <MdCheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
