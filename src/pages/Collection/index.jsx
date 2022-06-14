/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { RiAddLine } from "react-icons/ri";
import Container from "../../components/View/Container";
import HeaderContent from "../../components/View/HeaderContent";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/Button/ButtonGroup";
import CollectionCard from "../../components/Card/CollectionCardView";
import CardContainer from "../../components/Card/CardContainer";
import AddCollectionModal from "../../components/Modal/AddCollectionModal";
import WarningToast from "../../components/Toast/WarningToast";
import EmptyPage from "../../components/EmptyPage/EmptyPage";

const CollectionList = () => {
  const [toastMsg, setToastMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState({});

  useEffect(() => {
    // Check if is not null
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, []);

  const page_info = css`
    @media (max-width: 576px) {
      font-size: 18px;
    }
  `;

  useEffect(() => {
    if (toastMsg !== "") {
      const interval = setInterval(() => {
        setToastMsg("");
        clearInterval(interval);
      }, 2000);
    }
  }, [toastMsg]);

  return (
    <Container>
      {toastMsg !== "" && <WarningToast>{toastMsg}</WarningToast>}
      <HeaderContent>
        <h2 css={page_info}>My Collections</h2>
        <ButtonGroup>
          <Button
            text="Add New Collection"
            leftIcon={true}
            icon={
              <RiAddLine
                css={css`
                  margin-right: 5px;
                `}
              />
            }
            onClick={() => setIsOpen(true)}
          />
        </ButtonGroup>
      </HeaderContent>
      {isOpen && (
        <AddCollectionModal
          setIsOpen={setIsOpen}
          collections={collections}
          setCollections={setCollections}
          setToastMsg={setToastMsg}
        />
      )}
      {Object.keys(collections).length !== 0 ? (
        <CardContainer>
          {Object.keys(collections).map((name, idx) => (
            <CollectionCard
              name={name}
              key={idx}
              collections={collections}
              setCollections={setCollections}
              setToastMsg={setToastMsg}
            />
          ))}
        </CardContainer>
      ) : (
        <EmptyPage>There is no collection!</EmptyPage>
      )}
    </Container>
  );
};

export default CollectionList;
