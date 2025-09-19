import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-4 space-y-6 text-center">
      <h1 className="text-2xl font-semibold md:text-3xl">
        This cabin could not be found.
      </h1>
      <Link
        className="bg-accent-500 text-primary-800 inline-block cursor-pointer px-6 py-3 text-lg"
        href="/cabins"
      >
        Go back to all cabins
      </Link>
    </div>
  );
}
