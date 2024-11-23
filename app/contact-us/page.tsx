"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquareMore, Phone, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
    // Contact info data (placeholder, replace with your data)
    // const contactUsData = {
    //     email: "support@example.com",
    //     numbers: ["+1234567890", "+0987654321"],
    //     address: ["123 Street, City, Country", "456 Avenue, City, Country"],
    // };
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        <section className="bg-[#f8f8f8]  overflow-hidden">
            {/* Hero Section */}
            <section className="overflow-hidden bg-white bg-[url(/media/Doctors/background.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="liner p-4 md:p-8 lg:px-12 lg:py-14">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            Contact-<span className="text-primary">Us</span>
                        </h2>
                        <p className="m-auto mt-6 max-w-lg text-white/90 md:text-lg md:leading-relaxed">
                            exceptional medical care. With years of experience,
                            he continues to make a profound
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f8f8f8]">
                <div className="lg:grid lg:min-h-screen px-8 lg:grid-cols-12">
                    <section
                        data-aos="fade-right"
                        data-aos-duration="5000"
                        className="relative flex h-56 px-8 mt-5  items-center justify-center  lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <Image
                            loading="lazy"
                            alt="IMAGE"
                            src="/media/Doctors/bg22.webp"
                            width={480}
                            height={630}
                            className="absolute inset-0 h-[90%] w-full object-cover opacity-80 rounded-sm "
                        />

                        <div className="hidden lg:relative lg:block lg:p-12">
                            <a className="block text-main" href="#">
                                <span className="sr-only ">Home</span>
                                logo
                            </a>

                            <h2 className="mt-6 text-2xl font-bold text-main sm:text-3xl md:text-4xl">
                                countact us lorem
                            </h2>

                            <p className="mt-4 leading-relaxed text-maintitle">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                    </section>

                    <main className="w-full lg:col-span-7 lg:py-12 xl:col-span-6">
                        <div className="w-full" data-aos="fade-left ">
                            <form
                                onSubmit={submitHandler}
                                className="flex flex-col gap-4 mb-14 md:my-20 min-w-[100% ] md:mt-2 contact-us-page"
                            >
                                <div className="relative w-full">
                                    <User className="absolute left-3 top-2.5 text-[#1A76D1]" />
                                    <Input
                                        name="name"
                                        placeholder="Name"
                                        className="h-full flex w-full min-h-[48px] lg:h-12 rounded-[8px] pl-10 text-sm ring-offset-background placeholder:text-[#BCBCBC] bg-white placeholder:font-medium outline-0 border-none pe-5"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <Mail className="absolute left-3 top-2.5 text-[#1A76D1]" />
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        className="h-full flex w-full min-h-[48px] lg:h-12 rounded-[8px] pl-10 text-sm ring-offset-background placeholder:text-[#BCBCBC] bg-white placeholder:font-medium outline-0 border-none pe-5"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <Phone className="absolute left-3 top-2.5 text-[#1A76D1]" />
                                    <Input
                                        name="phone"
                                        placeholder="Phone (optional)"
                                        className="h-full flex w-full min-h-[48px] lg:h-12 rounded-[8px] pl-10 text-sm ring-offset-background placeholder:text-[#BCBCBC] bg-white placeholder:font-medium outline-0 border-none pe-5"
                                    />
                                </div>
                                <div className="relative w-full">
                                    <MessageSquareMore className="absolute left-3 top-2.5 text-[#1A76D1]" />
                                    <Textarea
                                        name="message"
                                        placeholder="Write your message"
                                        className="placeholder:text-[#BCBCBC] bg-white placeholder:font-medium outline-0 border-none pe-5 "
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-[#1A76D1] border rounded-lg gap-3 text-[16px] font-bold mt-5 py-2 px-4 text-white"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </section>
    );
};

export default ContactUs;
