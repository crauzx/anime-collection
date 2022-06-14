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
import CheckBoxCollection from "../Input/CheckBoxCollection";
import Modal from "./Modal";
import ModalTextBtn from "./ModalTextBtn";

const AddToCollectionModal = ({ setIsOpen, animeId, setWarnToastMsg, setNotifToastMsg }) => {
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
      setWarnToastMsg("Name Is Empty !");
    } else if (validateSpecialCharater()) {
      setWarnToastMsg("Name Contains Special Character !");
    } else if (validateExist()) {
      setWarnToastMsg("Name Already Exist !");
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

  const showForm = () => {
    setIsCreate(true);
    setNcName("");
  };

  const checkContains = (array) => {
    return array.indexOf(animeId) > -1;
  };

  useEffect(() => {
    // Check if is not null
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, []);

  return (
    <Modal click={() => setIsOpen(false)}>
      <ModalWrapper>
        <ModalHeader>
          <ModalHeading>Save To...</ModalHeading>
          <ModalCloseBtn onClick={() => setIsOpen(false)}>
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
                <CheckBoxCollection
                  id={idx}
                  value={name}
                  defaultChecked={checkContains(collections[name])}
                  animeId={animeId}
                  collections={collections}
                  setNotifToastMsg={setNotifToastMsg}
                  key={idx}
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

export default AddToCollectionModal;
