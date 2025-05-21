
import ProductDetail from "@/components/ProductDetail";
import ProductList from "@/components/ProductList";
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            <ProductDetail id={id} />
            <ProductList />
        </div>
    );
}