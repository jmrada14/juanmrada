import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";
export default function Header() {
  return (
    <>
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/">
            <a className="font-bold text-blue-500 hover:text-gray-500  text-5xl py-3">
              <span>🌏</span> Juan M. Rada
            </a>
          </Link>{" "}
          <ThemeSwitch />
          {useRouter().pathname === "/" && (
            <p className="text-lg text-gray-700 dark:text-gray-200 text-center my-4 w-full">
              <span className="text-2xl text-gray-800 dark:text-gray-50">
                👋 Hi there, I'm Juan
              </span>
              <br />
              <br />
              I'm an enthusiastic and ambitious software developer🚀
              <br /> committed to human-center development.🎯
              <br /> I'm interested in UI development,
              <br /> web performance📈, information security,
              <br /> privacy🥷, data analysis and visualization📊,
              <br /> and much more🔥
            </p>
          )}
        </div>
      </header>
    </>
  );
}
