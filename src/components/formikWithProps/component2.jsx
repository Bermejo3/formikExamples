function Component2({ formik }) {
  return (
    <div style={{ border: "1px solid red" }}>
      <p>Edad</p>
      <select
        name="age"
        onChange={formik.handleChange}
        value={formik.values.age}
      >
        <option value="18">18</option>
        <option value="patata">patata</option>
        <option value="35">35</option>
      </select>
      {formik.errors.age && <p style={{ color: "red" }}>{formik.errors.age}</p>}
    </div>
  );
}

export default Component2;
