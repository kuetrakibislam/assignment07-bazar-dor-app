import Link from 'next/link';


const HeroSection = () => {
    return (
        <div>
            <section className="overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            <span className="size-2 rounded-full bg-green-500" />
            প্রতিদিনের বাজারের আপডেট
          </div>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            বাজারের সঠিক দাম
            <span className="mt-2 block text-green-700">
              জানুন এক জায়গায়
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            চাল, ডাল, তেল, মাছ, মাংসসহ নিত্যপ্রয়োজনীয়
            পণ্যের প্রতিদিনের বাজারদর জানুন সহজেই।
            বাজারে যাওয়ার আগেই জেনে নিন কোন পণ্যের
            দাম বাড়ছে আর কোনটির দাম কমছে।
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <Link
              href="#সব-পণ্য"
              className="rounded-xl bg-green-700 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-1 hover:bg-green-800"
            >
              সব পণ্যের দাম দেখুন →
            </Link>

            <Link
              href="#বাজারদরের-পরিবর্তন"
              className="rounded-xl border border-green-200 bg-white px-7 py-3.5 text-base font-bold text-green-700 transition hover:bg-green-50"
            >
              দামের পরিবর্তন
            </Link>

          </div>

          {/* Small Information */}
          <div className="mt-10 flex flex-wrap gap-6 border-t border-green-100 pt-6">

            <div>
              <p className="text-2xl font-extrabold text-gray-900">
                ৮+
              </p>
              <p className="mt-1 text-sm text-gray-500">
                পণ্যের ক্যাটাগরি
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-gray-900">
                প্রতিদিন
              </p>
              <p className="mt-1 text-sm text-gray-500">
                বাজারদরের আপডেট
              </p>
            </div>

            <div>
              <p className="text-2xl font-extrabold text-gray-900">
                সহজ
              </p>
              <p className="mt-1 text-sm text-gray-500">
                দাম তুলনা করার সুবিধা
              </p>
            </div>

          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative mx-auto w-full max-w-lg">

          <div className="absolute inset-8 rounded-full bg-green-200/50 blur-3xl" />

          <div className="relative rounded-[2rem] border border-green-100 bg-white p-6 shadow-2xl shadow-green-900/10 sm:p-8">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-500">
                  আজকের বাজার
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-gray-900">
                  নিত্যপ্রয়োজনীয় পণ্য
                </h2>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                Live Update
              </span>
            </div>

            {/* Product Illustration */}
            <div className="my-8 grid grid-cols-3 gap-3">

              {[
                { icon: "🍚", name: "চাল" },
                { icon: "🫘", name: "ডাল" },
                { icon: "🛢️", name: "তেল" },
                { icon: "🥬", name: "সবজি" },
                { icon: "🐟", name: "মাছ" },
                { icon: "🍗", name: "মাংস" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-green-50 px-3 py-5 transition hover:-translate-y-1 hover:bg-green-100"
                >
                  <span className="text-4xl">
                    {item.icon}
                  </span>

                  <span className="text-sm font-bold text-gray-700">
                    {item.name}
                  </span>
                </div>
              ))}

            </div>

            {/* Price Information Card */}
            <div className="rounded-2xl bg-green-700 p-5 text-white">

              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-green-100">
                  বাজারদর এক নজরে
                </p>

                <span className="text-xl">📊</span>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-sm text-green-100">
                    সহজে দাম তুলনা করুন
                  </p>

                  <p className="mt-1 text-2xl font-extrabold">
                    স্মার্ট বাজার
                  </p>
                </div>

                <span className="text-4xl">🛒</span>
              </div>

            </div>

          </div>

          {/* Floating Badge */}
          <div className="absolute -right-3 top-16 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-6">
            <p className="text-xs font-medium text-gray-500">
              আপনার বাজার
            </p>
            <p className="mt-1 text-sm font-extrabold text-green-700">
              এখন আরও সহজ!
            </p>
          </div>

        </div>
      </div>
    </section>
        </div>
    );
};

export default HeroSection;