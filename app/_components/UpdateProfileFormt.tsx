"use client";

import Image from "next/image";

function UpdateProfileForm({ children }: { children: React.ReactNode }) {
  const countryFlag = "https://flagcdn.com/de.svg";

  return (
    <form
      action=""
      className="bg-primary-900 flex flex-col gap-6 px-6 py-8 text-lg md:px-12"
    >
      <div>
        <label>Full name</label>
        <input
          type="text"
          disabled
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-4 leading-none shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          defaultValue={"Max Mustermann"}
        />
      </div>

      <div>
        <label>Email address</label>
        <input
          defaultValue={"max@mustermann.de"}
          disabled
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-4 leading-none shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between">
          <label htmlFor="nationality">Where are you from?</label>

          <div className="relative aspect-video h-5">
            <Image
              src={countryFlag}
              alt="Country flag"
              fill
              className="rounded"
            />
          </div>
        </div>
        {children}
      </div>

      <div>
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          id="nationalID"
          className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-4 leading-none shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <button className="bg-accent-500 text-primary-800 hover:bg-accent-600 hover:text-primary-900 px-5 py-4 leading-none font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 md:px-8 md:py-4">
          Update profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
