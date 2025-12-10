import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            MyBrand
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
