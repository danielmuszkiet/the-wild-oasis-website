import Image from "next/image";
import Link from "next/link";

import LogoImg from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center justify-between gap-4">
      <Image src={LogoImg} priority alt="The Wild Oasis logo" width={60} />
      <span className="text-primary-100 text-xl font-semibold whitespace-nowrap">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
