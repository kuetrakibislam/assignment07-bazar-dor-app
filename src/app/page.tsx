export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="rounded-xl bg-white p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-green-700">
          বাজার দর
        </h1>

        <p className="mt-3 text-gray-600">
          Tailwind CSS + Turbopack + HeroUI
        </p>

        <button className="mt-5 rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700">
          Get Started
        </button>
      </div>
    </main>
  );
}