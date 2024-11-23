import MainArticle from "@/components/template/blog/MainArticle";
import RecommendedArticles from "@/components/template/blog/RecommendedArticles";
import { Article } from "@/lib/types";
import React from "react";

export default function BlogPage() {
    // Image as path for now
    const featuredArticle: Article = {
        id: 1,
        title: "The Future of Web Development: What's Next?",
        slug: "The-Future-of-Web-Development",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quod odio numquam, aperiam iure excepturi culpa molestiae quia laudantium placeat voluptas ratione molestias provident. ",
        image: "/media/layout/background2.png",
        category: "Technology",
        date: "Mar 15, 2024",
    };

    const recommendedArticles: Article[] = [
        {
            id: 4,
            title: "10 Tips for Better Code Organization",
            slug: "10-Tips-for-Better-Code-Organization",
            excerpt: "Learn how to keep your codebase clean and maintainable",
            image: "/media/layout/background2.png",
            category: "Best Practices",
            date: "Mar 12, 2024",
        },
        {
            id: 5,
            title: "Understanding TypeScript Generics",
            slug: "Understanding-TypeScript-Generics",
            excerpt: "A deep dive into TypeScript's powerful generic types",
            image: "/media/layout/background2.png",
            category: "TypeScript",
            date: "Mar 11, 2024",
        },
        {
            id: 6,
            title: "Building Scalable React Applications",
            slug: "Building-Scalable-React-Applications",
            excerpt: "Best practices for large-scale React projects",
            image: "/media/layout/background2.png",
            category: "React",
            date: "Mar 10, 2024",
        },
    ];
    return (
        <main className="container mx-auto max-w-4xl">
            <MainArticle featuredArticle={featuredArticle} />
            <RecommendedArticles recommendedArticles={recommendedArticles} />
        </main>
    );
}
