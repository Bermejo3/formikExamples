import { useFormikContext } from "formik";

function Component2() {
  const { values, handleChange, errors } = useFormikContext();

  return (
    <div style={{ border: "1px solid red" }}>
      <p>Edad</p>
      <select name="age" onChange={handleChange} value={values.age}>
        <option value="18">18</option>
        <option value="patata">patata</option>
        <option value="35">35</option>
      </select>
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
    </div>
  );
}

export default Component2;
