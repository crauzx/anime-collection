/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { useEffect } from "react";
import { css } from "@emotion/react";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalAction from "./ModalAction";
import ModalHeading from "./ModalHeading";
import ModalTextBtn from "./ModalTextBtn";
import Modal from "./Modal";

const RemoveAnimeModal = ({
  setIsOpen,
  collections,
  setCollections,
  animeId,
}) => {
  const params = useParams();
  const removeAnime = () => {
    const modifCollection = { ...collections };

    const index = modifCollection[params.name].indexOf(animeId);
    if (index > -1) {
      modifCollection[params.name].splice(index, 1);
    }

    setCollections(modifCollection);
    window.localStorage.setItem(
      "anime_collections",
      JSON.stringify(modifCollection)
    );
    setIsOpen(false);
  };

  const close = () => setIsOpen(false);

  useEffect(() => {
    // Check if is not null
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, []);

  return (
    <Modal click={close}>
      <ModalWrapper>
        <ModalHeader>
          <ModalHeading>Remove Anime</ModalHeading>
          <ModalCloseBtn onClick={close}>
            <RiCloseLine
              css={css`
                margin-bottom: -3px;
              `}
            />
          </ModalCloseBtn>
        </ModalHeader>
        <hr />
        <ModalAction>
          <div
            css={css`
              padding: 0.5rem;
            `}
          >
            <h4
              css={css`
                text-align: center;
              `}
            >
              Are you sure want to remove it ?
            </h4>
            <ModalTextBtn onClick={removeAnime}>Remove</ModalTextBtn>
          </div>
        </ModalAction>
      </ModalWrapper>
    </Modal>
  );
};

export default RemoveAnimeModal;
