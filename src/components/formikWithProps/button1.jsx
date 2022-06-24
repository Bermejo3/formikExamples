function Button1({ formik }) {
  return (
    <div style={{ border: "1px solid yellow" }}>
      <button type="submit" onClick={formik.handleSubmit}>
        ENVIAR
      </button>
    </div>
  );
}

export default Button1;
