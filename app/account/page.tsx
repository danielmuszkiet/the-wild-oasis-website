import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Area",
};

export default function Page() {
  return (
    <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
      Welcome Max Mustermann
    </h2>
  );
}
