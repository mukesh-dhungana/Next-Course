const Form = ({ handleSubmit, blog, setBlog }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Enter Country Name"
          value={blog.name || ""}
          onChange={(e) =>
            setBlog({
              ...blog,
              name: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          placeholder="Enter Population"
          value={blog.population || ""}
          onChange={(e) => setBlog({ ...blog, population: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
