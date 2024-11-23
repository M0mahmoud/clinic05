import { Article } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecommendedArticles({
    recommendedArticles,
}: {
    recommendedArticles: Article[];
}) {
    return (
        <section className="mb-8">
            <h2 className="mb-6 text-xl font-bold">Recommended Articles</h2>
            <div className="space-y-4">
                {recommendedArticles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/blog/${article.slug}`}
                        className="flex gap-4 rounded p-2 transition-colors hover:bg-gray-50 w-fit "
                    >
                        <div className="h-24 w-36 flex-shrink-0">
                            <div className="flex h-full items-center justify-center">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    width={96}
                                    height={96}
                                    className="h-full w-full object-cover rounded-sm"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <h3 className="flex-1 text-lg font-semibold">
                            {article.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
