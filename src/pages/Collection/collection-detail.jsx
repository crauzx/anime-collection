/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
import Container from "../../components/View/Container";
import HeaderContent from "../../components/View/HeaderContent";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/Button/ButtonGroup";
import EditCollectionModal from "../../components/Modal/EditCollectionModal";
import CardContainer from "../../components/Card/CardContainer";
import AnimeCard from "../../components/Card/AnimeCard";
import WarningToast from "../../components/Toast/WarningToast";
import EmptyPage from "../../components/EmptyPage/EmptyPage";

const CollectionDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [collectionName, setCollectionName] = useState(params.name);
  const [toastMsg, setToastMsg] = useState("");
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [collections, setCollections] = useState(
    JSON.parse(window.localStorage.getItem("anime_collections"))
  );

  useEffect(() => {
    navigate(`/collection/${collectionName}`);
  }, [collectionName]);

  useEffect(() => {
    if (toastMsg !== "") {
      const interval = setInterval(() => {
        setToastMsg("");
        clearInterval(interval);
      }, 1000);
    }
  }, [toastMsg]);

  return (
    <Container>
      {toastMsg !== "" && <WarningToast>{toastMsg}</WarningToast>}
      <HeaderContent>
        <h2>{collectionName}</h2>
        <ButtonGroup>
          <Button
            text="Edit"
            leftIcon={true}
            icon={
              <FaPencilAlt
                css={css`
                  margin-right: 5px;
                `}
              />
            }
            onClick={() => setEditIsOpen(true)}
          />
        </ButtonGroup>
      </HeaderContent>
      {editIsOpen && (
        <EditCollectionModal
          setIsOpen={setEditIsOpen}
          collections={collections}
          setCollections={setCollections}
          collectionName={collectionName}
          setCollectionName={setCollectionName}
          setToastMsg={setToastMsg}
        />
      )}
      {collections[collectionName].length !== 0 ? (
        <CardContainer>
          {collections[collectionName].map((animeId, idx) => (
            <AnimeCard
              animeId={animeId}
              key={idx}
              removeBtn={true}
              collections={collections}
              setCollections={setCollections}
            />
          ))}
        </CardContainer>
      ) : (
        <EmptyPage>There is no anime in this collection!</EmptyPage>
      )}
    </Container>
  );
};

export default CollectionDetail;
