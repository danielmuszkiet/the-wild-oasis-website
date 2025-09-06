import Link from "next/link";

export default function Page() {
  return (
    <div className="m-5">
      <h1>The Wild Oasis. Welcome to paradise.</h1>
      <div className="mt-20 flex flex-col gap-2">
        <Link href="/account">Account</Link>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
