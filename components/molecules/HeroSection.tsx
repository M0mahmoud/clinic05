"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import AuthButtons from "./AuthButtons";
import DrStatus from "./DrStatus";

export default function HeroSection() {
    const IMAGES = [
        { id: 1, src: "/media/Doctors/background.jpg" },
        { id: 2, src: "/media/Doctors/background1.jpg" },
        { id: 3, src: "/media/Doctors/7.png" },
    ];
    return (
        <main className="relative">
            <section className="w-full overflow-hidden">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                    className="w-full relative"
                >
                    <CarouselContent>
                        {IMAGES.map((image, index) => (
                            <CarouselItem key={index}>
                                <div
                                    className="h-[65vh]  md:h-[80vh] w-full bg-cover bg-center relative"
                                    style={{
                                        backgroundImage: `url(${image.src})`,
                                    }}
                                >
                                    <div className="absolute w-full h-full inset-0 liner"></div>

                                    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                                        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                                            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                                                We are here to support your
                                                <span className=" font-extrabold text-main ">
                                                    {" "}
                                                    health
                                                </span>
                                            </h1>

                                            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed mb-2">
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Nesciunt illo tenetur fuga
                                                ducimus numquam ea!
                                            </p>

                                            <AuthButtons
                                                btn_1={"Available"}
                                                btn_2={"Book now"}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                        <CarouselNext />
                        <CarouselPrevious />
                    </CarouselContent>
                </Carousel>
            </section>

            <div
                className="relative mt-[-20px] sm:mt-[-50px] z-10   w-full md-px-8   lg:px-32 "
                data-aos="fade-up"
                data-aos-duration="9000"
            >
                <DrStatus name={"Mohamed"} department={"Teeth"} />
            </div>
        </main>
    );
}
