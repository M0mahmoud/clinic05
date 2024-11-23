import Image from "next/image";
import React from "react";

function About() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="overflow-hidden bg-white bg-[url(/media/Doctors/background.jpg)] bg-cover bg-center bg-no-repeat">
                <div className="liner p-4 md:p-8 lg:px-12 lg:py-14">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            About{" "}
                            <span className="text-primary"> Dr. Mohamed </span>
                        </h2>
                        <p className="m-auto mt-6 max-w-lg text-white/90 md:text-lg md:leading-relaxed">
                            Dr. Mohamed is a renowned physician dedicated to
                            providing exceptional medical care. With years of
                            experience, he continues to make a profound impact
                            on the lives of his patients.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#services"
                                className="inline-block rounded-lg bg-primary px-10 py-4 text-lg font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Image Section */}
                    <div
                        className="relative h-80 overflow-hidden rounded-xl lg:order-last lg:h-full shadow-lg"
                        data-aos="fade-left"
                    >
                        <Image
                            loading="lazy"
                            alt="Doctor Image"
                            src="/media/Doctors/blog1.jpg"
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="lg:py-24" data-aos="fade-right">
                        <h2 className="text-4xl font-bold leading-tight text-main sm:text-5xl">
                            Our Mission
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Our mission is to provide world-class healthcare
                            services with a focus on excellence, compassion, and
                            patient-centered care. We aim to create a healthier
                            community through innovative treatments and
                            cutting-edge technologies.
                        </p>

                        <a
                            href="#"
                            className="mt-8 inline-block rounded-lg bg-indigo-600 px-10 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                        >
                            Join Us Today
                        </a>
                    </div>
                </div>
            </div>
            <section className="bg-primary-light text-main overflow-hidden">
                <div
                    className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
                    data-aos="flip-down"
                    data-aos-duration="5000"
                >
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Kickstart your marketing
                        </h2>
                        <div className="flex w-full items-center justify-center pb-4">
                            <Image
                                src="/media/icons/icon/section-img.png"
                                alt="About"
                                width={48}
                                height={23}
                                loading="lazy"
                            />
                        </div>
                        <p className="mt-4 text-maintitle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Consequuntur aliquam doloribus nesciunt eos
                            fugiat. Vitae aperiam fugit consequuntur saepe
                            laborum.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            className="block rounded-xl p-8 shadow-xl transition hover:shadow-sm  hover:shadow-main"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold  text-main">
                                Digital campaigns
                            </h2>

                            <p className="mt-1 text-sm text-maintitle">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis
                                laudantium.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl p-8 shadow-xl transition hover:shadow-sm  hover:shadow-main"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold  text-main">
                                Digital campaigns
                            </h2>

                            <p className="mt-1 text-sm text-maintitle">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis
                                laudantium.
                            </p>
                        </a>
                        <a
                            className="block rounded-xl p-8 shadow-xl transition hover:shadow-sm  hover:shadow-main"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 className="mt-4 text-xl font-bold  text-main">
                                Digital campaigns
                            </h2>

                            <p className="mt-1 text-sm text-maintitle">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis
                                laudantium.
                            </p>
                        </a>
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="#"
                            className="inline-block rounded bg-main  px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Appointment
                        </a>
                    </div>
                </div>
            </section>
            {/* Our Team Section */}
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-primary-light">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Section */}
                    <div
                        className="relative h-80 overflow-hidden rounded-xl shadow-lg lg:h-full "
                        data-aos="fade-right"
                    >
                        <Image
                            loading="lazy"
                            alt="Doctor Team"
                            src="/media/Doctors/blog1.jpg"
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Text Section */}
                    <div
                        className=" flex flex-col justify-center"
                        data-aos="fade-left"
                    >
                        <h2 className="text-4xl font-bold leading-tight text-main sm:text-5xl">
                            Meet Our Expert Team
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Our team of expert doctors is dedicated to providing
                            high-quality healthcare services. With diverse
                            specializations and a shared commitment to patient
                            well-being, they ensure you receive the best
                            possible care.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#team"
                                className="inline-block rounded-lg bg-indigo-600 px-10 py-4 text-lg font-semibold text-white transition-colors duration-300 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                            >
                                Meet The Team
                            </a>

                            <a
                                href="#services"
                                className="inline-block rounded-lg border border-indigo-600 px-10 py-4 text-lg font-semibold text-indigo-600 transition-colors duration-300 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-indigo-400"
                            >
                                Our Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
