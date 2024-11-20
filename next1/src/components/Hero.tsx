import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
    img: StaticImageData;
    imgalt: string;
    title: string;
}

const Hero = (prop:HeroProps) => {
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image src={prop.img} alt={prop.imgalt} fill />
            </div>
            <div className="pt-80 px-20 flex justify-center items-center">
                <h1 className="text-8xl font-bold text-neutral-200">{prop.title}</h1>
            </div>
        </div>
    );
}

export default Hero;