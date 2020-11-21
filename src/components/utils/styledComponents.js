import styled from '@emotion/styled';

export const FormContainer = styled.main`
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

    .form-title {
        color: var(--titulo)
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
    justify-content: space-around;
    padding: 1rem;
    flex-direction: row;

    .btn {
        border: none;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;

        &.btn-edit {
            background-color: green;
            margin-right: 2rem;
        }
        &.btn-delete {
            background-color: #ff4141;
        }
    }
`;