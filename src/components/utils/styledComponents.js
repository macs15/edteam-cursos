import styled from '@emotion/styled';

export const FormContainer = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 55px;
  form {
    border-radius: 10px;
    padding: 4rem 5rem 2rem 5rem;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .form-title {
          color: var(--titulo);
          margin-bottom: 2rem;
      }
      p {
          color: var(--texto);      
      }
    }

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
              margin-right: 0.5rem;
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

    .btn-cancel {
      a {
        display: inline-block;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: var(--azul);

        &:hover {
          background-color: rgba(3,3,3,.1);

        }
      }
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

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row !important;
    width: 100%;
    justify-content: center;
    padding: 1rem;

    .btn {
      border: none;
      padding: 1rem 2rem;
      border-radius: 5px;
      color: #fff;
      min-width: 90px;
      max-width: 90px;
      cursor: pointer;

      &.btn-edit {
          background-color: green;
          margin-right: 2rem;
      }
      &.btn-delete {
          background-color: #ff4141;
      }
    }

    @media (max-width: 992px) {

      .btn {
        &.btn-edit {
          margin-right: 3rem;
        }
      }
    }
`;

/* estilos Curso.js */
export const Container = styled.main`
  margin-top: 50px;

  .loading-text {
    margin: 1rem auto;
    text-align: center;
  }

  .container {
    background-color: #eff3f5;
    padding: 4rem;

    div {
      max-width: 1200px;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row-reverse;
      margin: 0 auto;

      .img-container {
        width: 50%;
        background-size: cover;
        img {
          border-radius: 10px;
          width: 100%;
        }
      }
      .info-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        padding: 0 2rem;

        .title {
          padding: 2rem;
        }

        .description {
          color: #697477;
        }

        .tags-container {
          width: 100%;
          margin-top: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .tag {
          display: inline-block;
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          
          &.soon {
            background-color: rgba(94,94,255,.2);
            color: var(--azul);
          }
          &.aviable {
            background-color: rgba(0,128,0,.2);
            color: var(--verde);
          }
        }

        .price {
          color: var(--azul);
          padding: 1rem 2rem;

          span {
            padding: 0 1rem;
          }
        }

        .free-course {
          color: var(--azul);
          padding: 1rem 2rem;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .container {
      padding: 1rem;
      div {
        flex-direction: column;
        align-items: center;

        .img-container {
          width: 100%;
          margin: 0;
        }
        .info-container {
          width: 100%;
          padding: 0;

          .title {
            font-size: 2.5rem;
            padding: 2rem 0;
          }

          .tags-container {
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
        }
      }
    }
  }
`;
export const RedirContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    background-color: var(--azul);
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 5rem;
  }
`;

/* CursoPreview.js */
export const CardContainer = styled.li`
    list-style: none;
    width: 33%;
    max-width: 250px;
    min-width: 250px;
    flex: 1;
    background-color: #fff;
    margin: 0 1rem 2rem 1rem;
    display: flex;
    flex-direction: column;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border-radius: 0 0 10px 10px;
    .img-container {
        width: 100%;
        img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            background-position: center;
            background-size: cover; 
        }
    }

    .details-container {
        padding: 2rem 2rem 1rem 2rem;
        height: auto;
        .title-container {
            a {
                text-decoration: none;
                font-size: 1.4rem;
                
                &:hover {
                    text-decoration: underline;
                    text-decoration-color: var(--azul);
                }
            }
        }
        .description-text {
            padding: 1rem 0;
            font-size: 1.4rem;
            color: #697477;
        }
    }
    .tag {
        padding: 1rem;
        margin-top: auto;

        .aviable {
            color: green;
        }
        .soon {
            color: #5e5eff;
        }
    }
    .footer {
        display: flex;
        justify-content: space-between;
        height: auto;
        padding: 1rem;
        background-color: #e0e1e1;
    }

    @media (max-width: 640px) {
        width: 90%;
        max-width: none;
        min-width: auto;
    }
`;

/* Inicio.js */
export const HomeContainer = styled.main`
  margin-top: 55px;

  h2 {
    margin-bottom: 4rem;
    font-size: 3.5rem;
    text-align: center;
  }
  .box-banner {
    background-color: #fff;
    padding: 4rem 4rem;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    .container-banner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .info-banner {
      padding: 4rem 2rem;
      width: 50%;
      h1 {
        margin-bottom: 4rem;

        span {
          color: var(--azul);
        }
      }

      .text {
        margin-bottom: 2rem;
        color: var(--texto);
      }
      .btn-container {
        display: flex;
        justify-content: center;
        .btn {
          padding: 1rem 2rem;
          border: none;
          border: 2px solid var(--azul);
          border-radius: 5px;
          background-color: transparent;
          color: var(--azul);
          font-size: 2rem;
          cursor: pointer;
          &:hover {
            color: #fff;
            background-color: var(--azul);
          }
        }
      }
    }
    .img-container {
      background-size: contain;
      width: 50%;
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 2rem;
    }
    .box-banner {
      padding: 0 1rem 1rem 1rem;
    }
    .container-banner {
      flex-direction: column;

      .info-banner {
        width: 100%;
        padding: 2rem 1rem;
        h1 {
          font-size: 2.5rem;
        }
      }
      .img-container {
        width: 100%;
      }
    }
  }
`;