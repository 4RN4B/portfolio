"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeaderSection() {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center px-4 text-center sm:text-left">
                    <h1 className="font-extrabold text-white mb-4 sm:text-5xl lg:text-6xl text-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Arnab Mondal",
                                1000,
                                "Full Stack Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Non dolore, fugiat magnam. In, architecto ipsum.
                    </p>
                    <div>
                        <button className="px-6 py-3 mx-3 my-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-cyan-900 font-semibold">
                            Hire Me
                        </button>
                        <button className="px-6 py-3 mx-3 my-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  hover:bg-cyan-900 font-semibold">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-5 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[200px] lg:w-[430px] lg:h-[370px] relative">
                        <Image
                            src="/images/homeImage.png"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt="image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
