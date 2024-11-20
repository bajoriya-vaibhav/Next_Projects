import homeImg from 'public/home.jpg';
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero img={homeImg} imgalt='Home' title='Automation is the Future'/>
  );
}
