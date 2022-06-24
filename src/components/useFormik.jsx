import "./../App.css";
import { useFormik } from "formik";

function UseFormikComponent() {
  const initialValues = {
    name: "",
    lastName: "",
    age: ""
  };

  const onSubmit = (values) => {
    console.log(values);
    // aqui poneis el mutate
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit
  });
  return (
    <div className="App">
      <p>Use Formik</p>
      <p>Are you Jared?</p>
      <form formik={formik}>
        <>
          <div>
            <p>Nombre</p>
            <input
              placeholder="Introduce nombre"
              value={formik.values.name}
              onChange={formik.handleChange}
              name={"name"}
            />
          </div>
          <div>
            <p>Apellido</p>
            <input
              placeholder="Introduce apellido"
              value={formik.values.lastName}
              onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
            />
          </div>
          <div>
            <p>Edad</p>
            <select
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            >
              <option value="18">18</option>
              <option value="30">30</option>
              <option value="35">35</option>
            </select>
          </div>
          <div>
            <button type="submit" onClick={formik.handleSubmit}>
              ENVIAR
            </button>
          </div>
        </>
      </form>
    </div>
  );
}

export default UseFormikComponent;
