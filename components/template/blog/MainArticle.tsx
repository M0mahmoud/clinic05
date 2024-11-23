import { Article } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainArticle({
    featuredArticle,
}: {
    featuredArticle: Article;
}) {
    return (
        <article className="mb-12 p-6">
            <Link href={`/blog/${featuredArticle.slug}`}>
                <h1 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl text-primary hover:text-primary/80 transition-colors">
                    {featuredArticle.title}
                </h1>
            </Link>

            <div className="mb-6 grid grid-cols-1 gap-2 md:grid-cols-[2fr_1fr] ">
                <div className="aspect-[4/3]  w-full h-full overflow-hidden rounded max-h-[320px]">
                    <Image
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        width={400}
                        height={300}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="grid grid-rows-2 gap-2 max-h-[320px]">
                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="aspect-[4/3] h-full w-full overflow-hidden rounded"
                        >
                            <Image
                                src={featuredArticle.image}
                                alt={`Additional image ${i} for ${featuredArticle.title}`}
                                width={200}
                                height={150}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-2 flex items-center text-sm text-gray-600">
                <span className="mr-4">{featuredArticle.category}</span>
                <span>{featuredArticle.date}</span>
            </div>

            <p className="text-gray-600">{featuredArticle.excerpt}</p>
        </article>
    );
}
