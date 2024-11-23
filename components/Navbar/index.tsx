"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthButtons from "../molecules/AuthButtons";
import Sidebar from "./Sidebar";

// import MenuUser from "../molecules/MenuUser";
// import { useAuth } from "@/context/auth/AuthProvider";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const pathname = usePathname(); // Get the current route
    console.log("🚀 ~ Header ~ pathname:", pathname);

    const navLink = [
        { id: 1, link: "Home", href: "/" },
        { id: 2, link: "About", href: "/about" },
        { id: 4, link: "Contact Us", href: "/contact-us" },
        { id: 5, link: "Blog", href: "/blog" },
    ];

    return (
        <header className="bg-white w-full">
            <main>
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo Section */}
                        <div className="md:flex md:items-center md:gap-12">
                            <Link
                                className="block font-extrabold text-main font-GeistVF"
                                href="/"
                            >
                                logo
                            </Link>
                        </div>

                        {/* Navigation Links for Desktop */}
                        <div className="hidden md:flex">
                            <nav>
                                <ul className="flex items-center justify-between gap-6 text-sm">
                                    {navLink.map((item) => (
                                        <li key={item.id}>
                                            <Link
                                                className={`${
                                                    pathname === item.href
                                                        ? "text-main font-bold" // Active link styling
                                                        : "text-gray-500"
                                                } transition font-GeistVF hover:text-main`}
                                                href={item.href}
                                            >
                                                {item.link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Auth Buttons or User Menu */}
                        <div className="hidden md:flex items-center gap-4">
                            {
                                // user?.id ? (
                                !false ? (
                                    "MenuUser"
                                ) : (
                                    <AuthButtons
                                        btn_1="Login"
                                        btn_2="Sign Up"
                                    />
                                )
                            }
                        </div>

                        {/* Hamburger Icon for Mobile */}
                        <div className="block md:hidden">
                            <button
                                className="rounded bg-primary-light p-2 text-main transition hover:text-gray-600/75"
                                onClick={toggleSidebar}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Sidebar for Mobile */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </header>
    );
}
