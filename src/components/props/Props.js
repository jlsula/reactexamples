function Props({ name, description, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{age}</p>
    </div>
  );
}

// Käyttää näitä, jos propseja ei ole määritelty
Props.defaultProps = {
  name: "Default Name",
  description: "Default description",
  age: 0,
};

export default Props;
