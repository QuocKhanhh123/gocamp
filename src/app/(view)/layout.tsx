
import Navbar from "@/components/ui/nav-bar";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <Navbar />
            {children}
        </section>
    );
}