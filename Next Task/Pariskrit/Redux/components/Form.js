const Form = ({ handleSubmit, countryDetails, setCountryDetails }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Enter Country Name"
          value={countryDetails.name || ""}
          onChange={(e) =>
            setCountryDetails({
              ...countryDetails,
              name: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          placeholder="Enter Population"
          value={countryDetails.population || ""}
          onChange={(e) =>
            setCountryDetails({ ...countryDetails, population: e.target.value })
          }
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
