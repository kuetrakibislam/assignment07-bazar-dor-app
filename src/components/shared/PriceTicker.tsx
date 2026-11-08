import { Product } from "@/types/product";


interface PriceTickerProps {
    products: Product[];
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

const PriceTicker = ({ products }: PriceTickerProps) => {
    if (products.length === 0) {
        return null;
    }
    return (
        <div>
            <section
                className="overflow-hidden border-b border-gray-200 bg-[#f8fbf8]"
                aria-label="আজকের বাজার দর"
            >
                <div className="flex w-max animate-marquee">

                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            className="flex shrink-0 items-center"
                            aria-hidden={copy === 1}
                        >
                            {products.map((product) => (
                                <div
                                    key={`${copy}-${product.id}`}
                                    className="flex items-center gap-2 border-r border-gray-200 px-6 py-4 whitespace-nowrap"
                                >
                                    <span className="text-lg">
                                        {product.image}
                                    </span>

                                    <span className="text-base font-medium text-gray-800">
                                        {product.nameBn}
                                    </span>

                                    <span className="text-base text-gray-800">
                                        {formatPrice(product.today)} টাকা/{getUnit(product.unit)}
                                    </span>

                                    <span
                                        className={`text-sm font-bold ${product.change.dir === "up"
                                                ? "text-red-600"
                                                : product.change.dir === "down"
                                                    ? "text-green-600"
                                                    : "text-gray-500"
                                            }`}
                                    >
                                        {product.change.dir === "up"
                                            ? "▲"
                                            : product.change.dir === "down"
                                                ? "▼"
                                                : "●"}

                                        {" "}

                                        {formatPrice(Math.abs(product.change.pct))}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
            </section>
        </div>
    );
};

export default PriceTicker;
