
import Navbar from "@/components/ui/nav-bar";
import Footer from "@/components/ui/footer";
import { AuthProvider } from "@/context/AuthContext";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <AuthProvider>
                    
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
            <Footer />
                    
            </AuthProvider>      

        </section>
    );
}