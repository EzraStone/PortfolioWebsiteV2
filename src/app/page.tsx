import { About } from "./_components/about";
import Hero from "./_components/hero";

export default function Home() {
    return (
        <div className="h-screen overflow-hidden">
            <Hero />
            <About />
        </div>
    );
}
