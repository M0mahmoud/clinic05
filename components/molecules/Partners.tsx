"use client";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface Partner {
    id: number;
    name: string;
    logo: string;
    description: string;
}

const partners: Partner[] = [
    {
        id: 1,
        name: "Company 1",
        logo: "/media/user/2.png",
        description: "وصف الCompany 1",
    },
    {
        id: 2,
        name: "Company 2",
        logo: "/media/user/2.png",
        description: "وصف الCompany 2",
    },
    {
        id: 4,
        name: "Company 4",
        logo: "/media/user/2.png",
        description: "وصف الCompany 4",
    },
    {
        id: 5,
        name: "Company 5",
        logo: "/media/user/2.png",
        description: "وصف الCompany 5",
    },
    {
        id: 6,
        name: "Company 6",
        logo: "/media/user/2.png",
        description: "وصف الCompany 6",
    },
];

export function PartnersSection() {
    const [selectedPartner, setSelectedPartner] = useState<Partner | null>(
        null,
    );
    console.log("🚀 ~ PartnersSection ~ selectedPartner:", selectedPartner);

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                Partners Section
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mx-auto">
                {partners.map((partner: Partner) => (
                    <Dialog key={partner.id}>
                        <DialogTrigger asChild>
                            <button
                                className="max-w-[200px] h-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={() => setSelectedPartner(partner)}
                            >
                                <Image
                                    loading="lazy"
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-white rounded-sm">
                            <div className="text-center">
                                <DialogTitle>{partner.name}</DialogTitle>
                                <div className="w-32 h-32 mx-auto relative mb-4">
                                    <Image
                                        loading="lazy"
                                        src={partner.logo}
                                        alt={partner.name}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>

                                <p className="text-sm  text-black">
                                    {partner.description}
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </section>
    );
}
