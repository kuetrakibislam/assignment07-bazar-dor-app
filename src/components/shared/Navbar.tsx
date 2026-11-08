
import Link from 'next/link';

const Navbar = async () => {
    
    const today = new Intl.DateTimeFormat("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka",
    }).format(new Date());


    return (
        <div>
            <header className="border-b border-gray-200 bg-[#f8fbf8]">
                <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">

                    {/* Logo and Date */}
                    <Link href="/" className="flex shrink-0 items-center gap-3">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-green-700 text-3xl shadow-sm">
                            🛒
                        </div>

                        <div>
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
                                বাজার দর
                            </h1>

                            <p className="mt-1 text-sm text-gray-600">
                                {today}
                            </p>
                        </div>
                    </Link>

                    {/* Authentication Buttons */}
                    <div className="flex shrink-0 items-center gap-3">
                        <Link
                            href="/signin"
                            className="rounded-lg px-3 py-3 text-base font-semibold text-gray-800 transition hover:bg-green-50"
                        >
                            সাইন ইন
                        </Link>

                        <Link
                            href="/signup"
                            className="rounded-xl bg-green-700 px-5 py-3 text-base font-bold text-white shadow-md transition hover:bg-green-800"
                        >
                            সাইন আপ
                        </Link>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;