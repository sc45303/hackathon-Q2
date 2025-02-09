"use client";

import { MdOutlineEmail } from "react-icons/md";

export function Newsletter() {
  return (
    <section className="bg-black text-white flex flex-col md:flex-row items-center gap-4  md:ml-0 py-10 rounded-xl mb-8  min-w-[410px]  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md font-Bold">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full md:w-auto">
            <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-gray-900 px-4 py-2 rounded-3xl w-full pl-10 font-satoshi"
                />
                <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-2xl" />
              </div>
              <button className="bg-white text-black hover:bg-gray-100 h-12 px-6 rounded-3xl w-full md:w-auto font-satoshi">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
