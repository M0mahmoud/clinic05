import { useAuth } from "@/context/auth/AuthProvider";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AuthButtons from "../molecules/AuthButtons";
import { MenuUser } from "../molecules/MenuUser";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}
export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    const navLink = [
        { id: 1, link: "Home", href: "/" },
        { id: 2, link: "About", href: "/about" },
        { id: 4, link: "Contact Us", href: "/contact-us" },
        { id: 434, link: "Blog", href: "/blog" },
        { id: 3, link: "Profile", href: "/profile" },
    ];
    const auth = useAuth();
    const pathname = usePathname();

    return (
        <div
            className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex justify-between p-4">
                <h2 className="text-xl text-main font-bold">Menu</h2>
                <button onClick={toggleSidebar}>
                    <X size={24} className="cursor-pointer text-main" />
                </button>
            </div>
            <nav className="p-4">
                <ul className="flex flex-col gap-4">
                    {navLink.map((item) => (
                        <li key={item.id}>
                            {/* Use the router pathname to apply active class */}
                            <Link
                                href={item.href}
                                className={`${
                                    pathname === item.href
                                        ? "text-main font-bold"
                                        : "text-gray-700"
                                } font-medium transition-colors duration-200 hover:text-main`}
                                onClick={toggleSidebar}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="mt-4">
                    {auth?.user?.id ? (
                        <MenuUser />
                    ) : (
                        <AuthButtons btn_1="Login" btn_2="Sign Up" />
                    )}
                </div>
            </nav>
        </div>
    );
}
