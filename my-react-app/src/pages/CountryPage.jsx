import { useParams } from "react-router-dom";
import countries from "../data/countries";

function CountryPage() {
  const { id } = useParams();
  const country = countries.find(c => c.id === id);

  if (!country) return <h2 className="p-6">Страна не найдена 😢</h2>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{country.name}</h1>
      <img src={country.img} alt={country.name} className="w-full max-w-lg rounded mt-4" />
      <p className="mt-4">{country.desc}</p>
      <ul className="list-disc pl-6 mt-2">
        {country.facts.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
}

export default CountryPage;
