/** @jsxImportSource @emotion/react */
import { RiCloseLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import ModalCloseBtn from "./ModalCloseBtn";
import ModalAction from "./ModalAction";
import InputText from "../Input/InputText";
import ModalHeading from "./ModalHeading";
import Modal from "./Modal";
import ModalTextBtn from "./ModalTextBtn";

const AddCollectionModal = ({
  setIsOpen,
  collections,
  setCollections,
  setToastMsg,
}) => {
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

      window.localStorage.setItem(
        "anime_collections",
        JSON.stringify(modifCollection)
      );
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
          <ModalHeading>Add New Collection</ModalHeading>
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
            <ModalTextBtn onClick={createNewCollection}>Create</ModalTextBtn>
          </div>
        </ModalAction>
      </ModalWrapper>
    </Modal>
  );
};

export default AddCollectionModal;
