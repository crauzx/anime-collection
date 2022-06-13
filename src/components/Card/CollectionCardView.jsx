/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useLazyQuery } from "@apollo/client";
import { QUERY } from "../../api/query";
import Button from "../Button/Button";
import ButtonGroup from "../Button/ButtonGroup";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import EditCollectionModal from "../Modal/EditCollectionModal";
import RemoveCollectionModal from "../Modal/RemoveCollectionModal";
import TextButton from "../Button/TextButton";
import { accentColor } from "../Colors/Colors";
import { ml_3, mr_3 } from "../../components/css/margin";

const removeTxtBtnCss = css`
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 0;
  line-height: 1.25;
  min-height: 2.5rem;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;

  &:hover {
    color: ${accentColor};
  }
`;

const editBtnCss = css`
  min-width: 45%;

  @media (max-width: 576px) {
    font-size: 16px;
    min-height: 2.5rem;
    border-radius: 0.8rem;
  }
`;

const CollectionCard = ({ name, collections, setCollections, setToastMsg }) => {
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [removeIsOpen, setRemoveIsOpen] = useState(false);

  const [getData, { data }] = useLazyQuery(QUERY, {
    variables: {
      id: parseInt(collections[name][0]),
    },
  });

  useEffect(() => {
    if (collections[name].length !== 0) getData();
  }, [collections]);

  return (
    <Card>
      <CardHeader>
        <NavLink to={`/collection/${name}`}>
          <img
            src={
              data === undefined
                ? "images/default-image.png"
                : data.Media.coverImage.large
            }
            alt=""
          />
          <h3
            css={css`
              text-align: center;
            `}
          >
            {name}
          </h3>
        </NavLink>
      </CardHeader>
      <CardBody
        css={css`
          align-items: center;
          min-height: 0;
        `}
      >
        <ButtonGroup
          css={css`
            justify-content: space-around;
            width: 100%;
          `}
        >
          <Button
            text="Edit"
            leftIcon={true}
            icon={<FaPencilAlt css={mr_3} />}
            css={editBtnCss}
            onClick={() => setEditIsOpen(true)}
          />
          <TextButton
            onClick={() => setRemoveIsOpen(true)}
            css={removeTxtBtnCss}
          >
            Remove
            <FaTrashAlt css={ml_3} />
          </TextButton>
        </ButtonGroup>
      </CardBody>
      {editIsOpen && (
        <EditCollectionModal
          setIsOpen={setEditIsOpen}
          collections={collections}
          setCollections={setCollections}
          collectionName={name}
          setToastMsg={setToastMsg}
        />
      )}
      {removeIsOpen && (
        <RemoveCollectionModal
          setIsOpen={setRemoveIsOpen}
          collections={collections}
          setCollections={setCollections}
          collectionName={name}
        />
      )}
    </Card>
  );
};

export default CollectionCard;
