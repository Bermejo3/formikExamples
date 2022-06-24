import "./../App.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Component1 from "./formikWithProps/component1";
import Component2 from "./formikWithProps/component2";
import Button1 from "./formikWithProps/button1";

function FormikUseFormikPropsDrilling() {
  const initialValues = {
    name: "",
    email: "",
    age: ""
  };

  const onSubmit = (values) => {
    console.log(values);
    // aqui poneis el mutate
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string().email("El email debe tener un formato válido"),
    age: Yup.number().typeError("Debe ser un numero")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className="App">
      <p>Use Formik Drilling Props</p>
      <p>Don't do this</p>
      <form formik={formik}>
        <>
          <Component1 formik={formik} />
          <Component2 formik={formik} />
          <Button1 formik={formik} />
        </>
      </form>
    </div>
  );
}

export default FormikUseFormikPropsDrilling;
