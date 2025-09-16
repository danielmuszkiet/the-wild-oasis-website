import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="hover:bg-primary-900 hover:text-primary-100 text-primary-200 flex w-full cursor-pointer justify-center gap-1 px-4 py-3 font-semibold transition-colors md:justify-start md:gap-4 md:px-5">
      <ArrowRightEndOnRectangleIcon className="text-primary-600 h-6 w-6 md:h-5 md:w-5" />
      <span className="hidden md:block">Sign out</span>
    </button>
  );
}

export default SignOutButton;
