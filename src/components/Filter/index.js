import "./Filter.css";

function Filter({ filterConditions, onProjectsList, fitlerActive }) {
  return (
    <section className="filter">
      {filterConditions.map((condition) => (
        <button
          name={condition}
          className={`fitler-button ${
            fitlerActive === condition ? "filter-active" : null
          }`}
          key={condition}
          onClick={() => onProjectsList(condition)}
        >
          {condition}
        </button>
      ))}
    </section>
  );
}

export default Filter;
