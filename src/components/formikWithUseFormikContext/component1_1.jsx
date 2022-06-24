import { useFormikContext } from "formik";

function Component1drill1() {
  const { values, setFieldValue, errors } = useFormikContext();
  return (
    <div style={{ border: "1px solid pink" }}>
      <div>
        <p>Email</p>
        <input
          placeholder="Introduce email"
          value={values.email}
          onChange={(e) => setFieldValue("email", e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
    </div>
  );
}

export default Component1drill1;
