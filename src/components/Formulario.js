import styled from "@emotion/styled";
import React, { useState } from "react";
import Navegacion from "./Layout/Navegacion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../config/axios";


const Formulario = () => {
  const [disponible, setDisponible] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      id: "",
      author: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre no puede ir vacío"),
      descripcion: Yup.string()
        .required("Una descripción es requerida")
        .max(180, "La descripción es muy larga (180 caracteres máximo)"),
      precio: Yup.number(),
      imagen: Yup.string().required('Debes añadir un link de imagen para el curso').url('Ingresa un url válido'),
      id: Yup.string().required('El slug es obligatorio'),
      author: Yup.string().required('El autor del curso es necesario')
    }),
    onSubmit: async values => {
      if(!disponible) {
        setMensaje({data: 'Debes especificar si está disponible este curso', tipo: 'error'})
        return;
      };

      const { nombre, descripcion, precio, imagen, id, author } = values;
      // genera el poster concatenando las variables
      const poster = `${process.env.REACT_APP_BASE_URL}cursos/${id}`

      try {
        const resultado = await axiosClient.post('/cursos', {
          nombre,
          descripcion,
          precio,
          imagen,
          id: id.trim(),
          author,
          disponible,
          poster
        });
        
        if(resultado.status === 201) {
          setMensaje({data: 'Curso creado correctamente!'})
        }
        formik.resetForm();

        setTimeout(() => {
          setMensaje(null);
        }, 3000);
      } catch (error) {
        // feedback para el usuario
        if(error.response.status === 500) {
          setMensaje({data: 'No se pudo agregar el curso, asegurate de que no sea un slug repetido', tipo: 'error'})
        } else {
          setMensaje({
            data: 'Ups, Algo salió mal en nuestro servidor',
            tipo: 'error'
          });
        }
        setTimeout(() => {
          setMensaje(null);
        }, 5000);
      }
    },
  });
  
  const handleClickRadio = value => {
    // convierte el valor a boolean
    let boolean = (value === 'true');

    setDisponible(boolean);
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
                name="nombre"
                placeholder="Nombre del curso"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <Error error={formik.errors.nombre} tipo='error' />
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
              <Error error={formik.errors.descripcion} tipo='error' />
            ) : null}

            <div className="input-container">
              <input
                className="input"
                id="author"
                name="author"
                placeholder="Autor del curso"
                type="text"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.author && formik.errors.author ? (
              <Error error={formik.errors.author} tipo='error' />
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
              <Error error={formik.errors.precio} tipo='error' />
            ) : null}

            <label htmlFor="slug" className="label-text">Slug del curso</label>
            <div className="input-container price">
              <input
                id="slug"
                className="input"
                name="id"
                placeholder="Ej: python, scracth, google-play-app"
                type="text"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.id && formik.errors.id ? (
              <Error error={formik.errors.id} tipo='error' />
            ) : null}

            <label htmlFor="imagen" className="label-text">URL de imagen</label>
            <div className="input-container price">
              <input
                id="imagen"
                className="input"
                name="imagen"
                placeholder="ej: http://example.com"
                type="text"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.imagen && formik.errors.imagen ? (
              <Error error={formik.errors.imagen} tipo='error' />
            ) : null}

            <p className="label-text">Disponibilidad del curso</p>
            <div className="input-container radio">
              <div className="input-radio">
                <input
                  id="disponible"
                  name="disponible"
                  type="radio"
                  value={true}
                  onClick={event => handleClickRadio(event.target.value)}
                  // onChange={formik.handleChange}
                />
                <label htmlFor="disponible">Disponible</label>
              </div>
              <div className="input-radio">
                <input
                  id="proximamente"
                  name="disponible"
                  type="radio"
                  value={false}
                  onClick={event => handleClickRadio(event.target.value)}
                />
                <label htmlFor="proximamente">Próximamente</label>
              </div>
            </div>

            {formik.touched.disponible && formik.errors.disponible ? (
              <Error error={formik.errors.disponible} tipo='error' />
            ) : null}
          </div>
              {/* Respuestas del servidor */}
          {mensaje && 
            <Error error={mensaje.data} tipo={mensaje.tipo} />
          }

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

const Error = ({ error, tipo }) => {
  return (
    <div className={tipo}>
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
        margin: 1rem 0 2rem 0;

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

    .error {
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
      background-color: var(--verde);
    }
    &.btn-reset {
      background-color: var(--azul);
    }
  }
`;