import "./../App.css";
import { Formik } from "formik";
import * as Yup from "yup";
import Component1 from "./formikWithUseFormikContext/component1";
import Component2 from "./formikWithUseFormikContext/component2";
import Button1 from "./formikWithUseFormikContext/button1";

function FormikWithUseFormikContext() {
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

  return (
    <div className="App">
      <p>Formik with useFormikContext </p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <Component1 />
            <Component2 />
            <Button1 />
          </>
        )}
      </Formik>
    </div>
  );
}

export default FormikWithUseFormikContext;
