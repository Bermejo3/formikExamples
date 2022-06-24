import Component1drill1 from "./component1_1";

function Component1({ formik }) {
  return (
    <div style={{ border: "1px solid green" }}>
      <div>
        <p>Nombre</p>
        <input
          placeholder="Introduce nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          name={"name"}
        />
        {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      </div>
      <Component1drill1 formik={formik} />
    </div>
  );
}

export default Component1;
