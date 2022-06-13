/** @jsxImportSource @emotion/react */
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalAction from "./ModalAction";
import ModalHeading from "./ModalHeading";
import ModalTextBtn from "./ModalTextBtn";
import Modal from "./Modal";

const RemoveCollectionModal = ({
  setIsOpen,
  collections,
  setCollections,
  collectionName,
}) => {
  const removeCollection = () => {
    const modifCollection = { ...collections };
    delete modifCollection[collectionName];

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
          <ModalHeading>Remove Collection</ModalHeading>
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
              Are you sure want to remove ?
            </h4>
            <ModalTextBtn onClick={removeCollection}>Remove</ModalTextBtn>
          </div>
        </ModalAction>
      </ModalWrapper>
    </Modal>
  );
};

export default RemoveCollectionModal;
