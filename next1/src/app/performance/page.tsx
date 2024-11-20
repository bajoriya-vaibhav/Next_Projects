import Hero from "@/components/Hero";
import Img from "public/performance.jpg";
export default () => {
    return (
        <div>
            <Hero img={Img} imgalt="Performance" title="Performance" />
        </div>
    );
}