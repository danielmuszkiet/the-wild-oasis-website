type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: string;
  className?: string;
};

function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryProps) {
  // const countries = await getCountries();
  // !TEMPORARY FIX LATER WHEN FETCHING!
  const countries = [
    { name: "germany", flag: "de" },
    { name: "france", flag: "fr" },
    { name: "england", flag: "en" },
    { name: "portugal", flag: "pt" },
  ];

  //!TEMPORARY FIX LATER WHEN FETCHING
  const flag = "pt";
  //   countries.find((country) => country.name === defaultCountry)?.flag ?? '';

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
