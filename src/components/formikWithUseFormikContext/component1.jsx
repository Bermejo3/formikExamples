import { useFormikContext } from "formik";
import Component1drill1 from "./component1_1";

function Component1() {
  const { values, handleChange, errors, touched } = useFormikContext();
  return (
    <div style={{ border: "1px solid green" }}>
      <div>
        <p>Nombre</p>
        <input
          placeholder="Introduce nombre"
          value={values.name}
          onChange={handleChange}
          name={"name"}
        />
        {errors.name && touched.name && (
          <p style={{ color: "red" }}>{errors.name}</p>
        )}
      </div>
      <Component1drill1 />
    </div>
  );
}

export default Component1;
