"use client";
import Image from "next/image";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
type Doctor = {
    id: number;
    name: string;
    image: string;
    type: string;
    description: string;
};

export default function Testimonials() {
    const opinions: Doctor[] = [
        {
            id: 1,
            name: "Nesma Ahmed",
            image: "/media/Doctors/3.jpg",
            type: "member",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
        },
        {
            id: 2,
            name: "Mohamed Ali",
            image: "/media/Doctors/12.jpg",
            type: "member",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
        },
        {
            id: 3,
            name: "Sara Ahmed",
            image: "/media/Doctors/11.jpg",
            type: "member",
            description:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam.",
        },
    ];

    return (
        <main className="my-7" data-aos="zoom-in-down" data-aos-duration="4000">
            <div className="w-full text-center">
                <h3 className="text-[2rem] font-bold text-main">
                    What People Say
                </h3>
                <p className="m-auto max-w-[85%]  md:max-w-[40%] text-[16px] text-gray-500">
                    Welcome to our Website name and what we do say some
                    discriptions abouth this service or what you need.
                </p>
                <div className="flex w-full items-center justify-center pb-5">
                    <Image
                        loading="lazy"
                        src="/media/icons/icon/section-img.png"
                        alt="IMAGE"
                        width={48}
                        height={23}
                    />
                </div>
            </div>

            <Carousel
                plugins={
                    [
                        // Autoplay({
                        //     delay: 4000,
                        // }),
                    ]
                }
                className="w-full relative"
            >
                <CarouselContent>
                    {opinions.map((opinion, index) => (
                        <TestimonialCard
                            opinion={opinion}
                            key={opinion.id + index}
                        />
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
            </Carousel>
        </main>
    );
}

function TestimonialCard({ opinion }: { opinion: Doctor }) {
    return (
        <CarouselItem className="md:basis-1/2">
            <blockquote className="rounded-sm bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                    <Image
                        loading="lazy"
                        alt={`Image of ${opinion.name}`}
                        src={opinion.image}
                        className="size-14 rounded-full object-cover"
                        width={66}
                        height={66}
                    />
                    <div>
                        <p className="mt-0.5 text-lg font-bold text-main">
                            {opinion.name}
                        </p>
                        <span className="text-[14px] text-maintitle">
                            {opinion.type}
                        </span>
                    </div>
                </div>
                <p className="mt-4 rounded-sm bg-primary-dark-light p-3 font-medium text-black">
                    {opinion.description}
                </p>
            </blockquote>
        </CarouselItem>
    );
}
