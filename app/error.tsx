"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold md:text-3xl">
        Something went wrong!
      </h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="bg-accent-500 text-primary-800 inline-block cursor-pointer px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </div>
  );
}
