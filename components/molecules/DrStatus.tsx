import Image from "next/image";
import AuthButtons from "./AuthButtons";

export default function DrStatus({
    name,
    department,
}: {
    name: string;
    department: string;
}) {
    return (
        <main className="px-3">
            <div className="grid  w-full grid-cols-1 rounded-sm bg-white px-5 py-9 gap-4 sm:grid-cols-2">
                <div className="flex items-center flex-wrap justify-start gap-4">
                    <Image
                        loading="lazy"
                        src="/media/Doctors/13.jpg"
                        className="h-32 w-32 rounded-full sm:h-40 sm:w-40"
                        alt="bgStuts"
                        width={128}
                        height={128}
                    />
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-lg font-extrabold text-[#ef0f0f]">
                            Dr: {name}
                        </h2>
                        <span className="text-[14px] font-bold text-maintitle">
                            {department}
                        </span>
                        <AuthButtons btn_1={"Available"} btn_2={"Book now"} />
                    </div>
                </div>

                <div className="flex w-full items-start justify-start mt-6 sm:mt-0 sm:justify-end">
                    <AuthButtons
                        btn_1={"Message"}
                        btn_2={"Follow"}
                        className="flex-row sm:flex-col"
                    />
                </div>
            </div>
        </main>
    );
}
