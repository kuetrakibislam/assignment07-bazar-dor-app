export const instant = false;

import {
    getProducts,
    getCategories,
} from "@/lib/api";


import React from 'react';

const ApiTestPage = async () => {

    const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
    ]);

    return (
        <div>
            <main className="min-h-screen bg-gray-50 p-8">
                <div className="mx-auto max-w-5xl space-y-8">

                    <h1 className="text-3xl font-bold text-green-700">
                        BazarDor API Test
                    </h1>

                    {/* Products */}
                    <section className="rounded-xl bg-white p-6 shadow">
                        <h2 className="text-xl font-bold">
                            Products
                        </h2>

                        <p className="mt-3">
                            Total Products: {products.length}
                        </p>

                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
                            {JSON.stringify(products.slice(0, 2), null, 2)}
                        </pre>
                    </section>

                    {/* Categories */}
                    <section className="rounded-xl bg-white p-6 shadow">
                        <h2 className="text-xl font-bold">
                            Categories
                        </h2>

                        <p className="mt-3">
                            Total Categories: {categories.length}
                        </p>

                        <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm">
                            {JSON.stringify(categories, null, 2)}
                        </pre>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default ApiTestPage;

