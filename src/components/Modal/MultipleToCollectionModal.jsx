/** @jsxImportSource @emotion/react */
import { RiCloseLine, RiAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalHeading from "./ModalHeading";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalAction from "./ModalAction";
import NewCollectionBtn from "../Button/NewCollectionBtn";
import InputText from "../Input/InputText";
import CheckBoxCollectionMultiple from "../Input/CheckBoxCollectionMultiple";
import Modal from "./Modal";
import ModalTextBtn from "./ModalTextBtn";

const MultipleToCollectionModal = ({ setIsOpen, animeId, setToastMsg, selectedAnime }) => {
  const [isCreate, setIsCreate] = useState(false);
  const [collections, setCollections] = useState({});
  const [ncName, setNcName] = useState("");

  const validateExist = () => {
    return collections[ncName] !== undefined;
  };

  const validateSpecialCharater = () => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(ncName);
  };

  const validateCannotEmpty = () => {
    return ncName.length === 0;
  };

  const createNewCollection = () => {
    if (validateCannotEmpty()) {
      setToastMsg("Name Is Empty !");
    } else if (validateSpecialCharater()) {
      setToastMsg("Name Contains Special Character !");
    } else if (validateExist()) {
      setToastMsg("Name Already Exist !");
    }

    if (
      !validateExist() &&
      !validateSpecialCharater() &&
      !validateCannotEmpty()
    ) {
      // Check if not exist
      const modifCollection = { ...collections };
      modifCollection[ncName] = [];

      setCollections(modifCollection);
      setIsCreate(false);
    }
  };

  const saveCollection = () => {
    window.localStorage.setItem(
      "anime_collections",
      JSON.stringify(collections)
    );
    setIsOpen(false);
  };

  const showForm = () => {
    setIsCreate(true);
    setNcName("");
  };

  useEffect(() => {
    // Check if is not null
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, []);

  return (
    <Modal click={saveCollection}>
      <ModalWrapper>
        <ModalHeader>
          <ModalHeading>Save To...</ModalHeading>
          <ModalCloseBtn onClick={saveCollection}>
            <RiCloseLine
              css={css`
                margin-bottom: -3px;
              `}
            />
          </ModalCloseBtn>
        </ModalHeader>
        {Object.keys(collections).length !== 0 && (
          <>
            <hr />
            <ModalContent>
              {Object.keys(collections).map((name, idx) => (
                <CheckBoxCollectionMultiple
                  id={idx}
                  value={name}
                  collections={collections}
                  setCollections={setCollections}
                  key={idx}
                  selectedAnime={selectedAnime}
                />
              ))}
            </ModalContent>
          </>
        )}
        <hr />
        <ModalAction>
          {isCreate ? (
            <div
              css={css`
                padding: 0.5rem;
              `}
            >
              <InputText
                placeholder={"Collection Name"}
                id={"name"}
                value={ncName}
                onChange={(e) => setNcName(e.target.value)}
              />
              <ModalTextBtn onClick={createNewCollection}>Create</ModalTextBtn>
            </div>
          ) : (
            <NewCollectionBtn onClick={showForm}>
              <RiAddLine
                css={css`
                  margin-right: 5px;
                `}
              />
              Create New Playlist
            </NewCollectionBtn>
          )}
        </ModalAction>
      </ModalWrapper>
    </Modal>
  );
};

export default MultipleToCollectionModal;
