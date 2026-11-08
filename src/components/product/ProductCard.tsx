import { Product } from '@/types/product';
import Link from 'next/link';


interface ProductCardProps {
    product: Product;
}

function formatPrice(price: number) {
    return new Intl.NumberFormat("bn-BD").format(price);
}

function getUnit(unit: string) {
    const units: Record<string, string> = {
        kg: "কেজি",
        liter: "লিটার",
        piece: "টি",
        dozen: "ডজন",
    };

    return units[unit] ?? unit;
}


const ProductCard = ({ product }: ProductCardProps) => {
    const isUp = product.change.dir === "up";
    const isDown = product.change.dir === "down";
    return (
        <div>
            <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl">

                {/* Product Image / Emoji */}
                <Link
                    href={`/product/${product.slug}`}
                    className="flex h-44 items-center justify-center bg-green-50 transition group-hover:bg-green-100"
                >
                    <span className="text-7xl transition duration-300 group-hover:scale-110">
                        {product.image}
                    </span>
                </Link>

                {/* Product Information */}
                <div className="p-5">

                    {/* Category */}
                    <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                            {product.categoryIcon} {product.categoryNameBn}
                        </span>

                        <span
                            className={`rounded-full px-2.5 py-1 text-xs font-bold ${isUp
                                    ? "bg-red-50 text-red-600"
                                    : isDown
                                        ? "bg-green-50 text-green-700"
                                        : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {isUp ? "▲" : isDown ? "▼" : "●"}
                            {" "}
                            {formatPrice(Math.abs(product.change.pct))}%
                        </span>
                    </div>

                    {/* Product Name */}
                    <Link href={`/product/${product.slug}`}>
                        <h3 className="text-lg font-bold text-gray-900 transition hover:text-green-700">
                            {product.nameBn}
                        </h3>
                    </Link>

                    {/* Price */}
                    <div className="mt-4">
                        <p className="text-xs font-medium text-gray-500">
                            আজকের বাজারদর
                        </p>

                        <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-2xl font-extrabold text-green-700">
                                ৳{formatPrice(product.today)}
                            </span>

                            <span className="text-sm text-gray-500">
                                / {getUnit(product.unit)}
                            </span>
                        </div>
                    </div>

                    {/* Yesterday's Price */}
                    <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
                        <span className="text-sm text-gray-500">
                            গতকালের দাম
                        </span>

                        <span className="text-sm font-semibold text-gray-700">
                            ৳{formatPrice(product.yesterday)}
                        </span>
                    </div>

                    {/* Details Button */}
                    <Link
                        href={`/product/${product.slug}`}
                        className="mt-4 flex w-full items-center justify-center rounded-xl border border-green-700 px-4 py-2.5 text-sm font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
                    >
                        বিস্তারিত দেখুন →
                    </Link>

                </div>
            </article>
        </div>
    );
};

export default ProductCard;