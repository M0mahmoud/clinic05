import Image from "next/image";
import Link from "next/link";

export function SocialLogin() {
    return (
        <div className="w-full space-y-7 py-3">
            <p className="flex h-[1px] w-full select-none items-center justify-center bg-gray-300">
                <span className="-mt-[1px] bg-white px-3 text-[.85rem] font-semibold tracking-wide text-gray-500">
                    OR
                </span>
            </p>

            <div className="grid w-full grid-cols-2 gap-3">
                <Link
                    href="/"
                    className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2.5 duration-300 hover:bg-primary-light"
                >
                    <Image
                        loading="lazy"
                        src="/media/layout/google.png"
                        alt="Google"
                        width={27}
                        height={27}
                    />
                </Link>

                <Link
                    href="/auth/login"
                    className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-[#3a559c] py-2.5 duration-300 hover:opacity-[.8]"
                >
                    <Image
                        loading="lazy"
                        src="/media/layout/facebook.png"
                        alt="Facebook"
                        width={27}
                        height={27}
                    />
                </Link>
            </div>
        </div>
    );
}
