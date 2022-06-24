import "./../App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function FormikWithValidation() {
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
      <p>Formik with validation</p>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          setFieldValue,
          values,
          errors,
          touched
        }) => (
          <>
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
            <div>
              <p>Email</p>
              <input
                placeholder="Introduce email"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
              <p>Edad</p>
              <select name="age" onChange={handleChange} value={values.age}>
                <option value="18">18</option>
                <option value="patata">patata</option>
                <option value="35">35</option>
              </select>
              {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
            </div>
            <div>
              <button type="submit" onClick={handleSubmit}>
                ENVIAR
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export default FormikWithValidation;
