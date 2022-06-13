/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { QUERY } from "../../api/query";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import Button from "../Button/Button";
import { FaTrashAlt } from "react-icons/fa";
import RemoveAnimeModal from "../Modal/RemoveAnimeModal";
import CheckBoxAnime from "../Input/CheckBoxAnime";

const AnimeCard = ({
  item = null,
  animeId = "",
  removeBtn = false,
  collections = null,
  setCollections = null,
  isShowChBox = false,
  selectedAnime = [],
  setSelectedAnime = () => {},
}) => {
  const [removeIsOpen, setRemoveIsOpen] = useState(false);
  const [anime, setAnime] = useState();
  const [getAnime, { data }] = useLazyQuery(QUERY, {
    variables: {
      id: parseInt(animeId),
    },
  });

  useEffect(() => {
    if (item === null) getAnime();
  }, []);

  useEffect(() => {
    if (item !== null) setAnime(item);
  }, [item]);

  useEffect(() => {
    if (data) setAnime(data.Media);
  }, [data]);

  const StyledCardBodyTop = styled.div`
    p {
      color: #999;
      font-size: 13px;
      margin: 0 0 40px;
    }
  `;

  const StyledCardBodyBottom = styled.div`
    display: flex;
    margin-top: auto;
  `;

  const removeBtnStyle = css`
    display: ${removeBtn ? "" : "none"};
    position: absolute;
    right: 2%;
    top: 2%;
    border-radius: 10px;
    padding: 0.6rem;
    min-height: 0;
    line-height: 0;
    @media (max-width: 576px) {
      margin-top: 5px;
    }
  `;

  return (
    <>
      {anime && (
        <Card>
          <Button
            rightIcon={true}
            icon={<FaTrashAlt />}
            css={removeBtnStyle}
            onClick={() => setRemoveIsOpen(true)}
          />
          <CheckBoxAnime
            animeId={anime.id}
            selectedAnime={selectedAnime}
            setSelectedAnime={setSelectedAnime}
            isShowChBox={isShowChBox}
          />
          <NavLink to={`/anime/${anime.id}`}>
            <CardHeader>
              <img src={anime.coverImage.large} alt="" />
            </CardHeader>
            <CardBody>
              <StyledCardBodyTop>
                <h3>{anime.title.romaji}</h3>
                <p>{anime.title.english}</p>
              </StyledCardBodyTop>
              <StyledCardBodyBottom>
                {anime.episodes} eps, {anime.duration} min
              </StyledCardBodyBottom>
            </CardBody>
          </NavLink>
          {removeIsOpen && (
            <RemoveAnimeModal
              setIsOpen={setRemoveIsOpen}
              collections={collections}
              setCollections={setCollections}
              animeId={animeId}
            />
          )}
        </Card>
      )}
    </>
  );
};

export default AnimeCard;
