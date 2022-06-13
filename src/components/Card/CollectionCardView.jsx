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
            justify-content: space-between;
            width: 100%;
          `}
        >
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
          <Button
            text="Remove"
            rightIcon={true}
            icon={
              <FaTrashAlt
                css={css`
                  margin-left: 5px;
                `}
              />
            }
            onClick={() => setRemoveIsOpen(true)}
          />
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
