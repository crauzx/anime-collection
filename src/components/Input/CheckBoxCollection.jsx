/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { primaryColor } from "../Colors/Colors";

const styledCheckBoxGroup = css`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  text-align: left;
  padding: 0.2rem 1rem 0.2rem 0;
  
  .ch-box {
    margin-right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    accent-color: ${primaryColor};
    cursor: pointer;

    @media (max-width: 576px) {
      width: 1rem;
      height: 1rem;
    }
  }

  .label {
    font-size: 16px;
    color: #000;
    cursor: pointer;

    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`;

const CheckBoxCollection = ({
  id,
  value,
  defaultChecked = false,
  collections,
  animeId,
  ...attr
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const [changeVal, setChangeVal] = useState(false);

  useEffect(() => {
    const modifCollection = { ...collections };

    if (checked === true && changeVal === true)
      // If check value is true and it's from changing value not default value
      modifCollection[value].push(animeId);
    else if(checked === false && changeVal === true) {
      // If check value is false and it's from changing value not default value
      const index = modifCollection[value].indexOf(animeId);
      if (index > -1) {
        modifCollection[value].splice(index, 1);
      }
    }
  }, [checked, changeVal]);

  return (
    <div className="checkbox-group" css={styledCheckBoxGroup}>
      <input
        className="ch-box"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => {
          setChangeVal(true);
          setChecked(!checked);
        }}
        required
        {...attr}
      />
      <label htmlFor={id} className="label">
        {value}
      </label>
    </div>
  );
};

export default CheckBoxCollection;
