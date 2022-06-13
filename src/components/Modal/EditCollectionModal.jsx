/** @jsxImportSource @emotion/react */
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import InputText from "../Input/InputText";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalAction from "./ModalAction";
import ModalHeading from "./ModalHeading";
import ModalTextBtn from "./ModalTextBtn";
import Modal from "./Modal";

const EditCollectionModal = ({
  setIsOpen,
  collections,
  setCollections,
  collectionName,
  setCollectionName = null,
  setToastMsg,
}) => {
  const [ncName, setNcName] = useState(collectionName);

  const validateExist = () => {
    // Ignore if same name
    if (ncName === collectionName) return false;
    return collections[ncName] !== undefined;
  };

  const validateSpecialCharater = () => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return format.test(ncName);
  };

  const validateCannotEmpty = () => {
    return ncName.length === 0;
  };

  const editCollection = () => {
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
      const oldCollection = { ...collections };
      if (collectionName !== ncName) {
        // If it's different collection name
        // Rename
        const keyValues = Object.keys(oldCollection).map((name) => {
          if (name === collectionName) return { [ncName]: oldCollection[name] };
          return { [name]: oldCollection[name] };
        });
        const modifCollection = Object.assign({}, ...keyValues);
        delete modifCollection[collectionName];

        // Save
        if (setCollectionName !== null) setCollectionName(ncName);
        setCollections(modifCollection);
        window.localStorage.setItem(
          "anime_collections",
          JSON.stringify(modifCollection)
        );
      }
      setIsOpen(false);
    }
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
          <ModalHeading>Edit Collection</ModalHeading>
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
            <InputText
              placeholder={"Collection Name"}
              id={"name"}
              value={ncName}
              onChange={(e) => setNcName(e.target.value)}
            />
            <ModalTextBtn onClick={editCollection}>Save</ModalTextBtn>
          </div>
        </ModalAction>
      </ModalWrapper>
    </Modal>
  );
};

export default EditCollectionModal;
