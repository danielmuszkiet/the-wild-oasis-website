import { getCountries } from "../_lib/data";

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className?: string;
};

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  const countries = await getCountries();

  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  console.log(flag);

  return (
    <select
      name={name}
      id={id}
      className={className}
      defaultValue={`${defaultCountry}%${flag}`}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
