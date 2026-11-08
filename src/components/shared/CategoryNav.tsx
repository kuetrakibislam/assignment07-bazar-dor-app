import { Category } from "@/types/category";
import Link from "next/link";

interface categoryNavProps {
    categories: Category[];
}

const CategoryNav = ({ categories }: categoryNavProps) => {
    return (
        <div>
            <nav className="border-b border-gray-200 bg-[#f8fbf8]">
                <div className="mx-auto max-w-[1440px] overflow-x-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex min-w-max items-center justify-center gap-3 py-4 md:gap-7">

                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                href={`/category/${category.slug}`}
                                className="flex items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-base font-semibold text-gray-800 transition hover:bg-green-100 hover:text-green-800"
                            >
                                <span className="text-lg">
                                    {category.icon}
                                </span>

                                <span>
                                    {category.nameBn}
                                </span>
                            </Link>
                        ))}

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default CategoryNav;