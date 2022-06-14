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

const CheckBoxCollectionMultiple = ({
  id,
  value,
  collections,
  selectedAnime,
  setCollections,
  setNotifToastMsg,
  ...attr
}) => {
  const [checked, setChecked] = useState(false);
  const [changeVal, setChangeVal] = useState(false);
  const [defaultArray, setDefaultArray] = useState([]);

  useEffect(() => {
    const temp = [];
    collections[value].map((id) => temp.push(id));
    setDefaultArray(temp);
  }, [])

  useEffect(() => {
    const modifCollection = JSON.parse(JSON.stringify(collections));
    selectedAnime.map((animeId) => {
      const index = modifCollection[value].indexOf(`${animeId}`);
      if (checked === true && changeVal === true && index === -1) {
        modifCollection[value].push(`${animeId}`);
        setNotifToastMsg(`Added to ${value} collection`);
      } else if (checked === false && changeVal === true && index > -1) {
        if (defaultArray.indexOf(`${animeId}`) === -1){
          modifCollection[value].splice(index, 1);
          setNotifToastMsg(`Removed from ${value} collection`);
        }
      }
    });
    setCollections(modifCollection);

    window.localStorage.setItem(
      "anime_collections",
      JSON.stringify(modifCollection)
    );
  }, [checked]);

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

export default CheckBoxCollectionMultiple;
