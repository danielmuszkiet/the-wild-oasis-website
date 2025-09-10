import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  return <Link href="/account">Account Link</Link>;
}
