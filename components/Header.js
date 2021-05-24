import ThemeSwitch from "@components/ThemeSwitch";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 py-4">
        <nav>
          <div className="max-w-full px-4 mx-auto space-x-8">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <Link href="/">
                  <span className="text-2xl text-purple-500 px-2/4">
                    Juan M. Rada
                  </span>
                </Link>
              </div>
              <div className="px-32 float-right absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
