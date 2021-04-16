import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
export default function Header() {
  return (
    <>
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/">
            <a className="font-bold text-gray-800 dark:text-gray-100 hover:text-gray-700 dark:hover:text-blue-500 text-5xl py-3">
              Juan M. Rada
            </a>
          </Link>
          <p className="text-lg text-gray-600">Welcome... Coming soon</p>
          <ThemeSwitch />
        </div>
      </header>
    </>
  );
}
