import Link from "next/link";

export default function Header() {
  return (
    <>
      <main className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/">
            <a className="font-bold text-5xl py-3 text-gray-800 dark:text-red-50">
              Juan M. Rada
            </a>
          </Link>{" "}
        </div>
      </main>
    </>
  );
}
