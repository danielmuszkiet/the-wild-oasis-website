import Link from "next/link";

function LoginMessage() {
  return (
    <div className="bg-primary-800 flex items-center justify-center">
      <p className="px-8 py-12 text-center text-xl">
        Please{" "}
        {
          <Link href={"/login"} className="text-accent-500 underline">
            login
          </Link>
        }{" "}
        to reserver this <br />
        cabin right now{" "}
      </p>
    </div>
  );
}

export default LoginMessage;
