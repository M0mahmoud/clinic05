import AvilableTime from "@/components/molecules/AvilableTime";
import Gallery from "@/components/molecules/Gallery";
import HeroSection from "@/components/molecules/HeroSection";
import Offers from "@/components/molecules/Offers";
import { PartnersSection } from "@/components/molecules/Partners";
import Services from "@/components/molecules/Services";
import Testimonials from "@/components/molecules/testimonials";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <div className="px-3 sm:px-32">
                <AvilableTime />
                <PartnersSection/>
                <Services />
                <Offers />
                
                <Testimonials />
                <Gallery />
            </div>
        </main>
    );
}
