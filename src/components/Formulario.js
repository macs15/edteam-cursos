import styled from "@emotion/styled";
import React from "react";
import Navegacion from "./Layout/Navegacion";
import { useFormik } from "formik";
import * as Yup from "yup";


const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      titulo: "",
      descripcion: "",
      precio: 0,
      disponible: "",
    },
    validationSchema: Yup.object({
      titulo: Yup.string().required("El nombre no puede ir vacío"),
      descripcion: Yup.string()
        .required("Una descripción es requerida")
        .max(180, "La descripción es muy larga (180 caracteres máximo)"),
      precio: Yup.number(),
      disponible: Yup.bool().required(
        "Debes especificar si está disponible este curso"
      ),
    }),

    onSubmit: values => {
      console.log(values);
    },
  });

  const handleClickRadio = value => {
    console.log(value);
    formik.setFieldValue('disponible', value);
    formik.setFieldTouched('disponible', true);
  }
  return (
    <>
      <Navegacion />
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <h2>Datos del curso</h2>
          <div className="inputs-container">
            <div className="input-container">
              <input
                className="input"
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

            <p className="label-text">Precio del curso</p>
            <div className="input-container price">
              <input
                className="input"
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

            <p className="label-text">Disponibilidad del curso</p>
            <div className="input-container radio">
              <div className="input-radio">
                <input
                  id="disponible"
                  name="disponibilidad"
                  type="radio"
                  value={true}
                  onClick={event => handleClickRadio(event.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="">Disponible</label>
              </div>
              <div className="input-radio">
                <input
                  id="proximamente"
                  name="disponibilidad"
                  type="radio"
                  value={false}
                  onClick={event => handleClickRadio(event.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label>Próximamente</label>
              </div>
            </div>

            {formik.touched.disponible && formik.errors.disponible ? (
              <Error error={formik.errors.disponible} />
            ) : null}
          </div>
          <BtnContainer>
            <button type="submit" className="btn btn-save">
              Guardar
            </button>
            <button className="btn btn-reset" onClick={formik.handleReset}>
              Reset
            </button>
          </BtnContainer>
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
        justify-content: center;
        margin: 2rem 0;

        .input {
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
          &[type="number"] {
            width: 20%;
            min-width: 100px;
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

        &.radio {
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: row;

          .input-radio {
            margin: 1rem 2rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            input {
              margin-right: .5rem;
              &:checked {
                border-color: #1192ee;
                background-color: #1192ee;
              }
            }
          }
        }
      }
      .label-text {
        margin-top: 2rem;
        text-align: center;
        font-size: 1.8rem;
        color: #333;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    .error-container {
      margin: 1rem;
      background-color: rgba(254, 226, 226, 1);
      padding: 1rem 2rem;
      color: rgba(185, 28, 28, 1);
    }
  }

  @media (max-width: 440px) {
    form {
      padding: 2rem;

      .radio {
        .input-radio {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          input {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .btn {
    padding: 1rem 2rem;
    margin: 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    &.btn-save {
      background-color: green;
    }
    &.btn-reset {
      background-color: #347cf5;
    }
  }
`;