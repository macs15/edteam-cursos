import styled from "@emotion/styled";
import React from "react";
import Navegacion from "./Layout/Navegacion";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormContainer = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 70px;
  form {
    border-radius: 10px;
    padding: 70px;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs-container {
      width: 100%;

      .input-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 2rem 0;

        input {
          width: 100%;
          appearance: none;
          padding: 1rem 1.5rem;
          color: #333;
          border: 1px solid rgba(3, 3, 3, 0.1);
          line-height: 1.25;
          font-size: 1.8rem;

          &:focus {
            outline: none;
            border-color: #1192ee;
          }
          &[type=number] {
              width: 20%;
              margin-right: 1rem;
            &::-webkit-inner-spin-button {
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
            }
          }
        }
        .current {
            color: #333;
        }

        textarea {
            width: 100%;
            min-width: 100%;
            max-width: 100%;
            min-height: 50px;
            max-height: 200px;
            padding: 1rem 1.5rem;
            border: 1px solid rgba(3, 3, 3, 0.1);
            line-height: 1.25;
            color: #333;
            font-size: 1.8rem;
            font-family: Arial, Helvetica, sans-serif;
            appearance: none;
            &:focus {
                outline: none;
                border-color: #1192ee;
            }
        }
      }
    }

    .error-container {
      margin: 1rem;
      background-color: rgba(254, 226, 226, 1);
      padding: 1rem 2rem;
      color: rgba(185, 28, 28, 1);
    }
  }
`;

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
      precio: "",
      disponible: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required("El nombre no puede ir vacío"),
      descripcion: Yup.string()
        .required("Una descripción es requerida")
        .max(180, "La descripción es muy larga (180 caracteres máximo)"),
      precio: Yup.number().default(0),
      disponible: Yup.bool().required(
        "Debes especificar si está disponible este curso"
      ),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Navegacion />
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <h2>Datos del curso</h2>
          <div className="inputs-container">
            <div className="input-container">
              <input
                id="title"
                name="titulo"
                placeholder="Titulo"
                type="text"
                value={formik.values.titulo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.titulo && formik.errors.titulo ? (
              <Error error={formik.errors.titulo} />
            ) : null}

            <div className="input-container">
              <textarea
                name="descripcion"
                placeholder="Descripción"
                type="number"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.descripcion && formik.errors.descripcion ? (
              <Error error={formik.errors.descripcion} />
            ) : null}

            <div className="input-container price">
              <input
                name="precio"
                placeholder="Precio"
                type="number"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="current">USD</span>
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <Error error={formik.errors.precio} />
            ) : null}

            <div className="input-container">
              <input
                id=""
                name="disponible"
                type="radio"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label >USD</label>
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <Error error={formik.errors.precio} />
            ) : null}

          </div>
          <div>
            <button type="submit" className="btn">Guardar</button>
            <button className="btn" onClick={formik.handleReset}>
              Reset
            </button>
          </div>
        </form>
      </FormContainer>
    </>
  );
};

export default Formulario;

const Error = ({ error }) => {
  return (
    <div className="error-container">
      <p>{error}</p>
    </div>
  );
};
