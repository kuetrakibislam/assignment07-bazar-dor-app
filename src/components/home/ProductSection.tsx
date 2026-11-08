import { Product } from '@/types/product';
import ProductCard from '../product/ProductCard';


interface ProductSectionProps {
    products: Product[];
}

interface ProductGridProps {
    title: string;
    subtitle: string;
    products: Product[];
    icon: string;
}

function ProductGrid({
    title,
    subtitle,
    products,
    icon,
}: ProductGridProps) {
    return (
        <section className="py-10">

            {/* Section Heading */}
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{icon}</span>

                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            {title}
                        </h2>
                    </div>

                    <p className="mt-2 text-sm text-gray-500 sm:text-base">
                        {subtitle}
                    </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
                    {new Intl.NumberFormat("bn-BD").format(products.length)}টি পণ্য
                </span>
            </div>

            {/* Product Grid */}
            {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
                    <p className="text-3xl">📦</p>

                    <p className="mt-3 font-semibold text-gray-700">
                        এই মুহূর্তে কোনো পণ্য পাওয়া যায়নি।
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                        নতুন তথ্য পাওয়া গেলে এখানে দেখানো হবে।
                    </p>
                </div>
            )}

        </section>
    );
}

const ProductSection = ({ products }: ProductSectionProps) => {
    // 1. Products whose prices have increased
    const topRisers = products
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    // 2. Products whose prices have decreased
    const topFallers = products
        .filter((product) => product.change.dir === "down")
        .sort((a, b) => a.change.pct - b.change.pct)
        .slice(0, 6);

    // 3. All products
    const allProducts = products;

    return (
        <div>
            <div className="bg-gray-50">

                <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8">

                    {/* Price Changes */}
                    <div id="বাজারদরের-পরিবর্তন" className="scroll-mt-6">

                        <ProductGrid
                            title="দাম বেড়েছে"
                            subtitle="যেসব পণ্যের দাম সবচেয়ে বেশি বেড়েছে"
                            products={topRisers}
                            icon="📈"
                        />

                        <ProductGrid
                            title="দাম কমেছে"
                            subtitle="যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে"
                            products={topFallers}
                            icon="📉"
                        />

                    </div>

                    {/* All Products */}
                    <div
                        id="সব-পণ্য"
                        className="mt-8 scroll-mt-6 border-t border-gray-200 pt-8"
                    >
                        <ProductGrid
                            title="সকল পণ্য"
                            subtitle="বাজারের সব নিত্যপ্রয়োজনীয় পণ্যের বর্তমান দাম"
                            products={allProducts}
                            icon="🛒"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductSection;