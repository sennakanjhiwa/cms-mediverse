import { useEffect, useState } from "react";
import supabase from "./supabaseClient";

// Definisikan tipe data tabel "countries"
interface Country {
  id: number;
  name: string;
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCountries = async () => {
    const { data, error } = await supabase.from<Country>("countries").select();

    if (error) {
      console.error("Error fetching countries:", error);
      setError("Failed to fetch countries.");
    } else {
      setCountries(data ?? []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
