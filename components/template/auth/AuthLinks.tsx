import Link from "next/link";

interface AuthLinksProps {
    isRegister?: boolean;
}

export function AuthLinks({ isRegister }: AuthLinksProps) {
    return (
        <div className="select-none space-y-3 pb-2 pt-3">
            {!isRegister && (
                <p className="flex w-full items-center justify-center gap-2 text-[.9rem] font-semibold tracking-wide text-gray-600">
                    <Link
                        href="/auth/recovery"
                        className="text-primary duration-300 hover:underline hover:opacity-[.8]"
                    >
                        Forgot your password?
                    </Link>
                </p>
            )}

            <p className="flex w-full items-center justify-center gap-2 text-[.9rem] font-semibold tracking-wide text-gray-600">
                {isRegister
                    ? "Already have an account?"
                    : "Don't have an account yet?"}

                <Link
                    href={isRegister ? "/login" : "/register"}
                    className="text-primary duration-300 hover:underline hover:opacity-[.8]"
                >
                    {isRegister ? "Login" : "Register"}
                </Link>
            </p>
        </div>
    );
}
