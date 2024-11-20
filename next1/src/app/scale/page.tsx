import Hero from "@/components/Hero";
import Img from "public/scale.jpg";

export default () => {
    return (
        <div>
            <Hero img={Img} imgalt="Scale" title="Scale" />
        </div>
    );
}