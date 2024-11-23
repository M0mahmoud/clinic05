"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
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

    const autoplayOptions = {
        delay: 5000,
        stopOnInteraction: true,
        rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
    };
    return (
        <main className="relative">
            <section className="w-full overflow-hidden">
                <Carousel
                    plugins={[Autoplay(autoplayOptions)]}
                    opts={{
                        loop: true,
                        align: "start",
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="ml-0">
                        {IMAGES.map((image, index) => (
                            <CarouselItem key={image.id} className="pl-0">
                                <div className="relative h-[65vh] md:h-[80vh] w-full">
                                    <Image
                                        src={image.src}
                                        alt={`Slide ${index + 1}`}
                                        fill
                                        priority={index === 0}
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40" />{" "}
                                    {/* Overlay */}
                                    <div className="absolute inset-0 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
                                        <div className="max-w-xl text-left">
                                            <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                                                We are here to support your{" "}
                                                <span className="text-blue-500">
                                                    health
                                                </span>
                                            </h1>

                                            <p className="mt-4 max-w-lg text-white/90 text-lg sm:text-xl/relaxed mb-8">
                                                Lorem ipsum dolor sit amet
                                                consectetur, adipisicing elit.
                                                Nesciunt illo tenetur fuga
                                                ducimus numquam ea!
                                            </p>

                                            <AuthButtons
                                                btn_1="Available"
                                                btn_2="Book now"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="h-8 w-8 rounded-full left-0" />
                    <CarouselNext className="h-8 w-8 rounded-full right-0" />
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
