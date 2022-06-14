/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { QUERY_PAGINATION } from "../../api/query";
import { useLazyQuery } from "@apollo/client";
import {
  RiArrowDropRightLine,
  RiArrowDropLeftLine,
  RiAddLine,
} from "react-icons/ri";
import ButtonGroup from "../../components/Button/ButtonGroup";
import Container from "../../components/View/Container";
import Button from "../../components/Button/Button";
import HeaderContent from "../../components/View/HeaderContent";
import CardContainer from "../../components/Card/CardContainer";
import AnimeCard from "../../components/Card/AnimeCard";
import WarningToast from "../../components/Toast/WarningToast";
import MultipleToCollectionModal from "../../components/Modal/MultipleToCollectionModal";
import { ml_3, mr_3 } from "../../components/css/margin";
import NotificationToast from "../../components/Toast/NotificationToast";

const page_info = css`
  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

const btnGroup = css`
  width: 100%;
  margin-top: 20px;
  justify-content: flex-end;
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const Anime = () => {
  const [selectedAnime, setSelectedAnime] = useState([]);
  const [isShowChBox, setIsShowChBox] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [warnToastMsg, setWarnToastMsg] = useState("");
  const [notifToastMsg, setNotifToastMsg] = useState("");
  const [variables, setVariables] = useState({
    page: 1,
    perPage: 10,
  });
  const [loadAnimeList, { data }] = useLazyQuery(QUERY_PAGINATION, {
    variables: variables,
  });

  const scrollToTop = () => window.scrollTo(0, 0);

  const closeChBox = () => {
    setIsShowChBox(false);
    setSelectedAnime([]);
  };

  const nextPage = () => {
    setVariables({
      page: variables.page + 1,
      perPage: variables.perPage,
    });
    scrollToTop();
  };

  const prevPage = () => {
    setVariables({
      page: variables.page - 1,
      perPage: variables.perPage,
    });
    scrollToTop();
  };

  const openAddModal = () => {
    if (selectedAnime.length !== 0) setIsOpen(true);
    else {
      setWarnToastMsg("No anime selected!");
    }
  };

  useEffect(() => {
    loadAnimeList();
  }, []);

  useEffect(() => {
    loadAnimeList();
  }, [variables]);

  useEffect(() => {
    if (warnToastMsg !== "") {
      const interval = setInterval(() => {
        setWarnToastMsg("");
        clearInterval(interval);
      }, 1000);
    }
  }, [warnToastMsg]);

  useEffect(() => {
    if (notifToastMsg !== "") {
      const interval = setInterval(() => {
        setNotifToastMsg("");
        clearInterval(interval);
      }, 1000);
    }
  }, [notifToastMsg]);

  useEffect(() => {
    if (isOpen === false) closeChBox();
  }, [isOpen]);

  return (
    <div>
      {data && (
        <Container>
          {isOpen && (
            <MultipleToCollectionModal
              setIsOpen={setIsOpen}
              setWarnToastMsg={setWarnToastMsg}
              setNotifToastMsg={setNotifToastMsg}
              selectedAnime={selectedAnime}
            />
          )}
          {warnToastMsg !== "" && <WarningToast>{warnToastMsg}</WarningToast>}
          {notifToastMsg !== "" && <NotificationToast>{notifToastMsg}</NotificationToast>}
          <HeaderContent>
            <h2 css={page_info}>
              Page {data.Page.pageInfo.currentPage} of{" "}
              {data.Page.pageInfo.lastPage}
            </h2>
            <ButtonGroup>
              {isShowChBox ? (
                <>
                  <Button
                    text="Add to collection"
                    leftIcon={true}
                    icon={<RiAddLine css={mr_3} />}
                    css={mr_3}
                    onClick={() => openAddModal()}
                  />
                  <Button
                    text="Cancel"
                    onClick={() => closeChBox()}
                    css={ml_3}
                  />
                </>
              ) : (
                <Button
                  text="Set to my collection"
                  leftIcon={true}
                  icon={<RiAddLine css={mr_3} />}
                  onClick={() => setIsShowChBox(true)}
                />
              )}
            </ButtonGroup>
          </HeaderContent>
          <CardContainer>
            {data &&
              data.Page.media.map((item, idx) => (
                <AnimeCard
                  item={item}
                  key={idx}
                  isShowChBox={isShowChBox}
                  selectedAnime={selectedAnime}
                  setSelectedAnime={setSelectedAnime}
                />
              ))}
          </CardContainer>
          <ButtonGroup css={btnGroup}>
            {data.Page.pageInfo.currentPage !== 1 && (
              <Button
                text="Prev"
                leftIcon={true}
                icon={<RiArrowDropLeftLine css={mr_3} />}
                onClick={() => prevPage()}
              />
            )}
            {data.Page.pageInfo.hasNext === false ? (
              ""
            ) : (
              <Button
                text="Next"
                rightIcon={true}
                icon={<RiArrowDropRightLine css={ml_3} />}
                onClick={() => nextPage()}
                css={css`
                  margin-left: 10px;
                `}
              />
            )}
          </ButtonGroup>
        </Container>
      )}
    </div>
  );
};

export default Anime;
