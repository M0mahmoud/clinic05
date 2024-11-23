"use client";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

export default function AvilableTime() {
    const times = [
        {
            id: 1,
            day: "today",
            pointsNum: 5,
        },
        {
            id: 2,
            day: "tomorrow",
            pointsNum: 3,
        },
        {
            id: 3,
            day: "today",
            pointsNum: 9,
        },
        {
            id: 4,
            day: "Saturday",
            pointsNum: 6,
        },
        {
            id: 5,
            day: "Sunday",
            pointsNum: 2,
        },
        {
            id: 6,
            day: "Monday",
            pointsNum: 3,
        },
    ];

    const MoriningTime = [
        {
            id: 1,
            time: "1:30",
        },
        {
            id: 2,
            time: "1:30",
        },
        {
            id: 4,
            time: "1:30",
        },
        {
            id: 5,
            time: "1:30",
        },
        {
            id: 6,
            time: "1:30",
        },
        {
            id: 7,
            time: "1:30",
        },
    ];

    const eveningTime = [
        {
            id: 1,
            time: "1:30",
        },
        {
            id: 2,
            time: "1:30",
        },
        {
            id: 4,
            time: "1:30",
        },
        {
            id: 5,
            time: "1:30",
        },
        {
            id: 6,
            time: "1:30",
        },
        {
            id: 7,
            time: "1:30",
        },
    ];

    return (
        <main
            className="min-h-60 mt-[20px] rounded-sm bg-white p-4 font-bold "
            data-aos="zoom-in"
            data-aos-duration="4000"
        >
            <h4 className="text-[16px] text-main sm:text-[20px] font-GeistVF">
                Available daily from 11 am to 3.30 pm and from 4.5 pm to 9 pm.
            </h4>
            <h3 className="my-3 text-[15px] font-medium text-maintitle sm:text-[19px]">
                Available Appointments
            </h3>
            <div className="flex w-full items-center justify-center pb-5">
                <Image
                    loading="lazy"
                    src="/media/icons/icon/section-img.png"
                    alt="IMAGE"
                    width={48}
                    height={23}
                />
            </div>
            <div className="m-auto mb-4 w-full sm:w-9/12 relative">
                <Carousel opts={{}} className="w-full relative">
                    <CarouselContent className="p-4">
                        {times.map((time, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-full sm:basis-1/2 md:basis-1/4"
                            >
                                <div className="flex py-2">
                                    <div className="flex flex-col rounded-[5px] p-[5px] text-center shadow-custom w-full">
                                        <p className="text-base">{time.day}</p>
                                        <span>
                                            <span className="text-red-600">
                                                {time.pointsNum}
                                            </span>{" "}
                                            appointments
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="mt-2 flex w-full items-center justify-center">
                <Image
                    loading="lazy"
                    src="/media/icons/icon/section-img.png"
                    alt="IMAGE"
                    width={48}
                    height={23}
                />
            </div>
            <div className="   sm:ms-11 p-1 sm:p-6">
                {/* Morning Time Section */}
                <div className="flex items-center justify-start gap-4">
                    <div className=" flex items-center justify-around gap-2">
                        <Sun className="text-yellow-500" />

                        <span>Morning</span>
                    </div>
                    <div className="my-4 flex items-center gap-4 overflow-auto">
                        {MoriningTime.map((time) => (
                            <span
                                className="rounded-sm border border-maintitle px-6 py-2"
                                key={time.id}
                            >
                                {time.time}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Evening Time Section */}
                <div className="flex items-center justify-start gap-4">
                    <div className="ms-2 flex items-center justify-around gap-2">
                        <Moon className="text-zinc-600" />

                        <span>Evening</span>
                    </div>
                    <div className="my-6 flex items-center gap-4 overflow-auto">
                        {eveningTime.map((time) => (
                            <span
                                className="rounded-sm border border-maintitle px-6 py-2"
                                key={time.id}
                            >
                                {time.time}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
