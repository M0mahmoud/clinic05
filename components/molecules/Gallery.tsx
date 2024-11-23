import Image from "next/image";

export default function Gallery() {
    const images = [
        "/media/Doctors/1.jpg",
        "/media/Doctors/11.jpg",
        "/media/Doctors/12.jpg",
        "/media/Doctors/13.jpg",
        "/media/Doctors/doctor-detail.jpg",
        "/media/Doctors/doc4.jpg",
    ];

    return (
        <section className="container mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Gallery
            </h2>
            <div className="flex gap-4 w-full justify-center flex-col sm:flex-row">
                <div className="flex gap-4 relative flex-col">
                    <Image
                        loading="lazy"
                        src={images[0]}
                        alt="Doctor 1"
                        width={225}
                        height={225}
                        className="object-cover w-full sm:w-56 h-56 rounded-sm aspect-square"
                    />
                    <Image
                        loading="lazy"
                        src={images[1]}
                        alt="Doctor 4"
                        width={225}
                        height={225}
                        className="object-cover w-full sm:w-56 h-56 rounded-sm aspect-square"
                    />
                </div>
                <div className="flex flex-col  gap-4 relative">
                    <Image
                        loading="lazy"
                        src={images[2]}
                        alt="Doctor 2"
                        width={183}
                        height={275}
                        className="object-cover w-full sm:w-56 h-full rounded-sm"
                    />
                </div>
                <div className="flex gap-4 relative flex-col">
                    <Image
                        loading="lazy"
                        src={images[3]}
                        alt="Doctor 3"
                        width={225}
                        height={225}
                        className="object-cover w-full sm:w-56 h-56 rounded-sm"
                    />
                    <div className="flex gap-2 flex-col sm:flex-row">
                        <Image
                            loading="lazy"
                            src={images[4]}
                            alt="Doctor 5"
                            width={120}
                            height={225}
                            className="object-cover w-full sm:w-24 h-56 rounded-sm"
                        />
                        <Image
                            loading="lazy"
                            src={images[5]}
                            alt="Doctor 6"
                            width={120}
                            height={225}
                            className="object-cover w-full sm:w-24 h-56 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
