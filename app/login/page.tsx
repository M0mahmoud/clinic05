"use client";

import LoginIcon from "@/components/atoms/icons/loginIcon";
import { AuthLinks } from "@/components/template/auth/AuthLinks";
import { LoginForm, LoginFormData } from "@/components/template/auth/loginForm";
import { SocialLogin } from "@/components/template/auth/SocialLogin";
// import { useRouter } from "next/navigation";

export default function LoginPage() {
    // const router = useRouter();

    async function handleLogin(values: LoginFormData) {
        // Implement your login logic here
        console.log("Login values:", values);
        // Example:
        // await LoginPost(values);
        // if (success) router.push("/");
    }

    return (
        <div className="py-10">
            <main className="flex cursor-default items-center justify-center">
                <div className="log-form panel w-full p-6 sm:w-[27rem]">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <LoginIcon />
                        <div className="text-[1.4rem] font-bold tracking-wide text-primary">
                            Log In
                        </div>
                    </div>

                    <LoginForm onSubmit={handleLogin} />
                    <SocialLogin />
                    <AuthLinks />
                </div>
            </main>
        </div>
    );
}
