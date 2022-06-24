import { useFormikContext } from "formik";

function Button1() {
  const { handleSubmit } = useFormikContext();
  return (
    <div style={{ border: "1px solid yellow" }}>
      <button type="submit" onClick={handleSubmit}>
        ENVIAR
      </button>
    </div>
  );
}

export default Button1;
