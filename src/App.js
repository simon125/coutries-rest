import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CountriesList } from "./pages/CountriesList/CountriesList";
import { CountryDetails } from "./pages/CountryDetails/CountryDetails";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route
            path="/country-details/:countryName"
            element={<CountryDetails />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
