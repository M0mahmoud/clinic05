// import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface OfferCard {
    id: number;
    image: string;
    date: string;
    title: string;
}

const offers: OfferCard[] = [
    {
        id: 1,
        image: "/media/Doctors/6.jpg",
        date: "October 19, 2024",
        title: "Login now and get 400 points and 5% discount on your first order",
    },
    {
        id: 2,
        image: "/media/Doctors/6.jpg",
        date: "October 19, 2024",
        title: "Login now and get 400 points and 5% discount on your first order",
    },
    {
        id: 3,
        image: "/media/Doctors/6.jpg",
        date: "October 19, 2024",
        title: "Login now and get 400 points and 5% discount on your first order",
    },
    {
        id: 4,
        image: "/media/Doctors/6.jpg",
        date: "October 19, 2024",
        title: "Login now and get 400 points and 5% discount on your first order",
    },
    {
        id: 5,
        image: "/media/Doctors/6.jpg",
        date: "October 19, 2024",
        title: "Login now and get 400 points and 5% discount on your first order",
    },
];

export default function Offers() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Offers</h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="">
                    {offers.map((offer) => (
                        <CarouselItem
                            key={offer.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="border border-blue-100 rounded-sm">
                                <CardContent className="p-0">
                                    <div className="relative aspect-[3/2] ">
                                        <Image
                                            loading="lazy"
                                            src={offer.image}
                                            alt={offer.title}
                                            fill
                                            className="rounded-t-sm"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between text-sm text-green-700 mb-2">
                                            <span>
                                                <CalendarDays className="inline size-5" />{" "}
                                                {offer.date}
                                            </span>
                                            <span>Ends in</span>
                                        </div>
                                        <p className="text-sm mb-4">
                                            {offer.title}
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Link
                                        href="#"
                                        className="flex items-start justify-center rounded-[8px] border border-primary bg-primary p-2 px-5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:bg-white hover:text-main"
                                    >
                                        Login
                                    </Link>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-blue-50 border-gray-200" />
                <CarouselNext className="hidden md:flex -right-12 bg-blue-600 hover:bg-blue-700 text-white" />
            </Carousel>
        </section>
    );
}
