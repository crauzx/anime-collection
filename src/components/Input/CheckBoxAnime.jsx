/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { primaryColor } from "../Colors/Colors";

const CheckBoxAnime = ({
  animeId,
  selectedAnime,
  setSelectedAnime,
  isShowChBox,
  ...attr
}) => {
  const styledCheckBoxGroup = css`
    display: ${isShowChBox ? "" : "none"};
    position: absolute;
    right: 2%;
    top: 2%;
    padding: 0.6rem;
    z-index: 2;

    @media (max-width: 576px) {
      margin-top: 5px;
    }

    input[type="checkbox"] {
      transform: scale(2);
      accent-color: ${primaryColor};
      cursor: pointer;
    }
  `;

  const cardOverlay = css`
    display: ${isShowChBox ? "" : "none"};
    label {
      position: absolute;
      background: rgba(0, 0, 0, 0);
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  `;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(false);
  }, [isShowChBox]);

  useEffect(() => {
    const modifAnime = [...selectedAnime];

    if (checked) modifAnime.push(animeId);
    else {
      const idx = modifAnime.indexOf(animeId);
      if (idx > -1) modifAnime.splice(idx, 1);
    }

    setSelectedAnime(modifAnime);
  }, [checked]);

  return (
    <>
      <div css={cardOverlay}>
        <label htmlFor={animeId} />
      </div>
      <div className="checkbox-group" css={styledCheckBoxGroup}>
        <input
          className="ch-box"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          required
          id={animeId}
          {...attr}
        />
      </div>
    </>
  );
};

export default CheckBoxAnime;
