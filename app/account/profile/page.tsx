import SelectCountry from "@/app/_components/SelectCountry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Update profile",
};

function Page() {
  const countryFlag = "pt.jpg";
  const nationality = "portugal";

  return (
    <div>
      <h2 className="text-accent-400 mb-4 text-2xl font-semibold">
        Update you guest profile
      </h2>

      <p className="text-primary-200 mb-8 text-lg">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

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
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-4 leading-none shadow-sm"
            defaultCountry={nationality}
          />
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
    </div>
  );
}

export default Page;
