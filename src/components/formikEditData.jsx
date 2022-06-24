import "./../App.css";
import { Formik } from "formik";
import { useState } from "react";

function EditDataFormik() {
  const data = {
    name: "Alberto",
    lastName: "Bermejo",
    age: "30"
  };
  const [dataEdit, setDataEdit] = useState(data);

  const initialValues = {
    name: dataEdit.name,
    lastName: dataEdit.lastName,
    age: dataEdit.age
  };

  const onSubmit = (values) => {
    console.log(values);
    setDataEdit(values);
    // aqui poneis el mutate
  };
  return (
    <div className="App">
      <p>Formik with initialValues with data</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, handleChange, setFieldValue, values }) => (
          <>
            <div>
              <p>Nombre</p>
              <input
                placeholder="Introduce nombre"
                value={values.name}
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div>
              <p>Apellido</p>
              <input
                placeholder="Introduce apellido"
                value={values.lastName}
                onChange={(e) => setFieldValue("lastName", e.target.value)}
              />
            </div>
            <div>
              <p>Edad</p>
              <select name="age" onChange={handleChange} value={values.age}>
                <option value="18">18</option>
                <option value="30">30</option>
                <option value="35">35</option>
              </select>
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

export default EditDataFormik;
