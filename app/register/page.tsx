"use client";

import LoginIcon from "@/components/atoms/icons/loginIcon";
import { AuthLinks } from "@/components/template/auth/AuthLinks";
import {
    RegisterForm,
    RegisterFormData,
} from "@/components/template/auth/RegisterForm";
import { SocialLogin } from "@/components/template/auth/SocialLogin";
// import { useRouter } from "next/navigation";

export default function registerPage() {
    // const router = useRouter();

    async function handleRegister(values: RegisterFormData) {
        // Implement your registration logic here
        console.log("Register values:", values);
        // Example:
        // await RegisterPost(values);
        // if (success) router.push("/login");
    }

    return (
        <div className="py-10">
            <main className="flex cursor-default items-center justify-center">
                <div className="log-form panel w-full p-6 sm:w-[27rem]">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <LoginIcon />
                        <div className="text-[1.4rem] font-bold tracking-wide text-primary">
                            Register
                        </div>
                    </div>
                    <RegisterForm onSubmit={handleRegister} />
                    <SocialLogin />
                    <AuthLinks isRegister />
                </div>
            </main>
        </div>
    );
}
