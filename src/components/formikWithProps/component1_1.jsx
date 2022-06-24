function Component1drill1({ formik }) {
  return (
    <div style={{ border: "1px solid pink" }}>
      <div>
        <p>Email</p>
        <input
          placeholder="Introduce email"
          value={formik.values.email}
          onChange={(e) => formik.setFieldValue("email", e.target.value)}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}
      </div>
    </div>
  );
}

export default Component1drill1;
