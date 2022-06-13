/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { primaryColor } from "../Colors/Colors";

const styledCheckBoxGroup = css`
  position: absolute;
  right: 2%;
  top: 2%;
  padding: 0.6rem;

  @media (max-width: 576px) {
    margin-top: 5px;
  }

  input[type="checkbox"] {
    transform: scale(2);
    accent-color: ${primaryColor};
    cursor: pointer;
  }
`;

const CheckBoxAnime = ({
  animeId,
  selectedAnime,
  setSelectedAnime,
  isShowChBox,
  ...attr
}) => {
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
    <div className="checkbox-group" css={styledCheckBoxGroup}>
      <input
        className="ch-box"
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        required
        {...attr}
      />
    </div>
  );
};

export default CheckBoxAnime;
