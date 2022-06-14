/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { primaryColor } from "../Colors/Colors";

const styledInputGroup = css`
  margin-bottom: 20px;
  margin-top: 10px;
  position: relative;
  padding: 15px 0 0;
  width: 100%;

  .form__field {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #000;
    color: #000;
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    padding: 7px 0;
    outline: 0;
    transition: border-color 0.2s;
    width: 100%;
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1rem;
      cursor: text;
      top: 20px;
      @media (max-width: 576px) {
        font-size: 0.9rem;
      }
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #000;

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${primaryColor};

      @media (max-width: 576px) {
        font-size: 0.9rem;
      }
    }
    padding-bottom: 6px;
    border-image: linear-gradient(to right, ${primaryColor}, ${primaryColor});
    border-image-slice: 1;
  }

  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;

const InputText = ({ placeholder, id, ...attr }) => {
  return (
    <div className="form__group field" css={styledInputGroup}>
      <input
        type="input"
        className="form__field"
        placeholder={placeholder}
        id={id}
        required
        {...attr}
      />
      <label htmlFor={id} className="form__label">
        {placeholder}
      </label>
    </div>
  );
};

export default InputText;
