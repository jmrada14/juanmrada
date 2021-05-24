import ThemeSwitch from "@components/ThemeSwitch";
import Link from "next/link";
export default function Header() {
  return (
    <>
      <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 py-4">
        <nav class="fixed z-10 flex justify-between w-screen bg-white xl:bg-transparent 2xl:bg-transparent dark:bg-gray-900 xl:dark:bg-transparent 2xl:dark:bg-transparent">
          <div class="flex flex-row items-center p-4">
            <ul class="flex items-center"></ul>
          </div>
          <ul class="flex items-center p-4">
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
