import React from "react";

//add generateMetadata

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <article className="container mx-auto px-4 py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{params.slug}</h1>
            </header>
        </article>
    );
}
