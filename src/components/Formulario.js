import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import Navegacion from "./Layout/Navegacion";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosClient from "../config/axios";
import CursoContext from "../context/CursoContext";
import { useHistory } from "react-router-dom";
import { FormContainer } from "./utils/styledComponents";

const Formulario = () => {
  const [initialValues, setInitialValues] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    id: "",
    author: "",
  });
  // radio separado porque perdía el booleano y lo cambiaba a string
  const [disponible, setDisponible] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  const { cursoseleccionado, comprobarCurso } = useContext(CursoContext);

  const history = useHistory(); // router react

  useEffect(() => {
    if (cursoseleccionado !== null) {
      // cargamos los valores del curso editando
      setInitialValues(cursoseleccionado);
      setDisponible(cursoseleccionado.disponible);
    } else {
      setInitialValues({
        nombre: "",
        descripcion: "",
        precio: 0,
        imagen: "",
        id: "",
        author: "",
        disponible: "",
      });
      setDisponible(null);
    }
  }, [cursoseleccionado]);

  const formik = useFormik({
    // recarga el form cuando cambian sus valores iniciales
    enableReinitialize: true,
    // valores cargados desde el state
    initialValues,
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre no puede ir vacío"),
      descripcion: Yup.string()
        .required("Una descripción es requerida")
        .max(180, "La descripción es muy larga (180 caracteres máximo)"),
      precio: Yup.number(),
      imagen: Yup.string()
        .required("Debes añadir un link de imagen para el curso")
        .url("Ingresa un url válido"),
      id: Yup.string()
        .required("El slug es obligatorio")
        .matches(
          "^[a-z-]+$",
          "el slug solo puede contener letras y deben ser minúsculas"
        ),
      author: Yup.string().required("El autor del curso es necesario"),
    }),

    onSubmit: async (values) => {
      setMensaje({ data: "cargando...", tipo: "info" });

      if (disponible === null) {
        setMensaje({
          data: "Debes especificar si está disponible este curso",
          tipo: "error",
        });
        // limpiamos la pantalla
        setTimeout(() => {
          setMensaje(null);
        }, 3000);
        return;
      }

      const { nombre, descripcion, precio, imagen, id, author } = values;
      // genera el poster concatenando las variables
      // const poster = `${process.env.REACT_APP_BASE_URL}cursos/${id}`;
      const poster = `http://localhost:3000/cursos/${id}`;
      const curso = {
        nombre,
        descripcion,
        precio,
        imagen,
        id: id.trim().toLowerCase(),
        author,
        disponible,
        poster,
      };

      // comprobamos que no exista el id(slug);
      const existeCurso = await comprobarCurso(id);

      // comprueba si se usará post o put
      if (cursoseleccionado) {
        if (existeCurso) {
          // para asegurarnos de que exista el slug antes de acceder a su attr id
          if (existeCurso.id !== cursoseleccionado.id) {
            formik.setFieldError(
              "id",
              "Slug existente, por favor intenta con uno distinto"
            );
            setMensaje(null);
            return;
          }

          try {
            // axios put
            await axiosClient.put(`/cursos/${id}`, curso, { timeout: 5000});

            window.alert("Curso actualizado correctamente!");
            history.push(`/cursos/${id}`);
          } catch (e) {
            setMensaje({
              data: "Hubo un error actualizando el curso",
              tipo: "error",
            });
          }
        }
      } else {

        if (existeCurso) {
          formik.setFieldError(
            "id",
            "Slug existente, por favor intenta con uno distinto"
          );
          setMensaje(null);
          return;
        }
        try {
          const resultado = await axiosClient.post("/cursos", curso);

          if (resultado.status === 201) {
            window.alert("Curso creado correctamente!");
            formik.resetForm();
            history.push(`/cursos/${resultado.data.id}`);
          } else {
            setMensaje(null);
            window.alert("Algo salió mal al actualizar este curso");
          }
        } catch (error) {
          // feedback para el usuario
          setMensaje({
            data: "Ups, Algo salió mal en nuestro servidor",
            tipo: "error",
          });
          setTimeout(() => {
            setMensaje(null);
          }, 3000);
        }
      }
    },
  });

  const handleClickRadio = (value) => {
    // convierte el valor a boolean
    let boolean = value === "true";

    setDisponible(boolean);
  };

  const handleFormReset = () => {
    // resetear valores
    formik.handleReset();
    setInitialValues({
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      id: "",
      author: "",
      disponible: "",
    });
    setDisponible(null);
  };

  return (
    <>
      <Navegacion />
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <div className="title-container">
            {!cursoseleccionado ? (
              <>
                <h2 className="form-title">Crea un nuevo curso</h2>
                <p>
                  Rellena los campos con la información necesaria para crear el
                  curso
                </p>
              </>
            ) : (
              <>
                <h2 className="form-title">Actualizar curso</h2>
                <p>Rellena los campos con la información actualizada</p>
              </>
            )}
          </div>
          <div className="inputs-container">
            <div className="input-container">
              <input
                className="input"
                id="title"
                name="nombre"
                title="Nombre del curso"
                placeholder="Nombre del curso"
                type="text"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.nombre && formik.errors.nombre ? (
              <Error error={formik.errors.nombre} tipo="error" />
            ) : null}

            <div className="input-container">
              <textarea
                name="descripcion"
                placeholder="Descripción"
                type="number"
                title="Descripción del curso"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.descripcion && formik.errors.descripcion ? (
              <Error error={formik.errors.descripcion} tipo="error" />
            ) : null}

            <div className="input-container">
              <input
                className="input"
                id="author"
                name="author"
                placeholder="Autor del curso"
                title="Autor del curso"
                type="text"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.author && formik.errors.author ? (
              <Error error={formik.errors.author} tipo="error" />
            ) : null}

            <p className="label-text">Precio del curso</p>
            <div className="input-container price">
              <input
                className="input"
                name="precio"
                placeholder="Precio"
                type="number"
                title="Precio del producto en caso de ser de pago"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="current">USD</span>
            </div>

            {formik.touched.precio && formik.errors.precio ? (
              <Error error={formik.errors.precio} tipo="error" />
            ) : null}

            <label htmlFor="slug" className="label-text">
              Slug del curso
            </label>
            <div className="input-container price">
              <input
                id="slug"
                className="input"
                name="id"
                title="Slug del curso"
                placeholder="Ej: python, scracth, google-play-app"
                type="text"
                value={formik.values.id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.id && formik.errors.id ? (
              <Error error={formik.errors.id} tipo="error" />
            ) : null}

            <label htmlFor="imagen" className="label-text">
              URL de imagen
            </label>
            <div className="input-container price">
              <input
                id="imagen"
                className="input"
                name="imagen"
                title="URL de la imagen para el curso"
                placeholder="ej: http://example.com"
                type="text"
                value={formik.values.imagen}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.imagen && formik.errors.imagen ? (
              <Error error={formik.errors.imagen} tipo="error" />
            ) : null}

            <p className="label-text">Disponibilidad del curso</p>
            <div className="input-container radio">
              <div className="input-radio">
                <input
                  id="disponible"
                  name="disponible"
                  title="Disponibilidad del curso"
                  type="radio"
                  value={true}
                  checked={disponible === true}
                  onChange={(event) => handleClickRadio(event.target.value)}
                />
                <label htmlFor="disponible">Disponible</label>
              </div>
              <div className="input-radio">
                <input
                  id="proximamente"
                  name="disponible"
                  title="Disponibilidad del curso"
                  type="radio"
                  value={false}
                  checked={disponible === false}
                  onChange={(event) => handleClickRadio(event.target.value)}
                />
                <label htmlFor="proximamente">Próximamente</label>
              </div>
            </div>

            {formik.touched.disponible && formik.errors.disponible ? (
              <Error error={formik.errors.disponible} tipo="error" />
            ) : null}
          </div>
          {/* Respuestas del servidor */}
          {mensaje && <Error error={mensaje.data} tipo={mensaje.tipo} />}

          <BtnContainer>
            <button type="submit" className="btn btn-save">
              Guardar
            </button>
            <button
              className="btn btn-reset"
              type="button"
              onClick={() => handleFormReset()}
            >
              Reset
            </button>
          </BtnContainer>
          <div className="btn-cancel">
            <a href="/cursos">Cancelar</a>
          </div>
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
    cursor: pointer;
    min-width: 90px;

    &.btn-save {
      background-color: var(--verde);
    }
    &.btn-reset {
      background-color: var(--rojo);
    }
  }
`;
