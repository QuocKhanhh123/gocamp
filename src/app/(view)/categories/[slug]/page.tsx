import ProductListByType from '@/components/ProductListByType';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  // Map slug URL -> type của sản phẩm
  const slugToTypeMap: Record<string, 'leu' | 'ban-ghe' | 'bep-mini'> = {
    tents: 'leu',
    furniture: 'ban-ghe',
    'cooking-tools': 'bep-mini',
  };

  const productType = slugToTypeMap[slug];

  if (!productType) {
    return <div className="p-8 text-center text-red-600">Danh mục không tồn tại.</div>;
  }

  return (
    <div className="p-4">
      <ProductListByType type={productType} />
    </div>
  );
}
