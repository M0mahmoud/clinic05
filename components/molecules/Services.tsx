"use client";

import Image from "next/image";
import Link from "next/link";

export default function Services() {
    const services = [
        {
            id: 1,
            name: "Nesma Ahmed",
            image: "Doctors/6.jpg",
            description: "Ophthalmology (Eyes)",
        },
        {
            id: 2,
            name: "Mohamed Ali",
            image: "Doctors/7.jpg",
            description: "Cardiology",
        },
        {
            id: 3,
            name: "Sara Ahmed",
            image: "Doctors/doc5.jpg",
            description: "Dermatology",
        },
    ];
    // const { data } = useFetch({
    //   endpoint: `client/home`,
    //   queryKey: [`client/home`],
    // });
    // console.log("🚀 ~ Services ~ data:", data);

    return (
        <section className="my-7" data-aos="zoom-in" data-aos-duration="3000">
            <div
                className="w-full text-center mt-5"
                data-aos="fade-right"
                data-aos-duration="5000"
            >
                <h3 className="text-[2rem] font-bold text-main">
                    Doctor Services
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
            </div>
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.id} data={service} />
                ))}
            </div>
        </section>
    );
}

function Card({
    data,
}: {
    data: {
        id: number;
        name: string;
        image: string;
        description: string;
    };
}) {
    return (
        <section className="w-full">
            <div className=" group bg-white rounded-sm w-fullcursor-default space-y-5 overflow-hidden pb-4">
                <div className="h-[13rem] w-full overflow-hidden">
                    <Image
                        loading="lazy"
                        src={`/media/${data.image}`}
                        className="h-full w-full object-cover duration-300"
                        alt={data.name}
                        width={310}
                        height={210}
                    />
                </div>

                <div className="flex w-full flex-col gap-1 px-6 text-left">
                    <Link
                        href={"/services/1"}
                        className="text-[1.1rem] font-bold tracking-wide text-gray-950 hover:text-main"
                    >
                        {data.name}
                    </Link>

                    <p className="text-[.9rem] font-semibold tracking-wide text-gray-700">
                        {data.description}
                    </p>

                    <div className="w-full pt-5">
                        <Link
                            href="#"
                            className="flex items-start justify-center rounded-[8px] border border-primary bg-primary p-2 px-5 text-[1rem] font-semibold tracking-wide text-white duration-300 hover:bg-white hover:text-main"
                        >
                            Book now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
