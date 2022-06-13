/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Moment from "moment";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { primaryColor, secondaryColor } from "../Colors/Colors";
import Button from "../Button/Button";
import Container from "../View/Container";
import AddToCollectionModal from "../Modal/AddToCollectionModal";
import Chip from "../Chip/Chip";
import Toast from "../Toast/Toast";
import Card from "./DetailCard/Card";
import CardLeft from "./DetailCard/CardLeft";
import CardRight from "./DetailCard/CardRight";
import Title from "../Text/Title";
import SecondaryTitle from "../Text/SecondaryTitle";
import { mr_20, mb_10 } from "../css/margin";

const TitleWrapper = styled.div`
  padding-inline: 1rem;
  padding-block: 0.3rem;
  background-color: ${primaryColor};
  color: #fff;
`;

const Rank = styled.div`
  padding-inline: 1rem;
  padding-block: 0.3rem;
  display: flex;
  background-color: ${secondaryColor};
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RankInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RITitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const RIValue = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 16px;
`;

const StyledLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const StyledTdHead = styled.td`
  padding-right: 1rem;
  font-weight: bold;
`;

const StyledTd = styled.td`
  padding: 0.5rem 1rem 0.5rem 1rem;
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: 14px;
`;

const addBtnStyle = css`
  border-radius: 20px;
  padding: 0.6rem;
  min-height: 0;
  line-height: 0;
  @media (max-width: 576px) {
    margin-top: 5px;
  }
`;

const CollectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    align-items: flex-start;
    justify-content: center;
  }
`;

const Label = styled.h3`
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const DetailView = (props) => {
  const [toastMsg, setToastMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [collections, setCollections] = useState({});

  useEffect(() => {
    // Check if is not null
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, []);

  useEffect(() => {
    // Set automatic to the state
    const datas = JSON.parse(window.localStorage.getItem("anime_collections"));
    if (datas !== null) setCollections(datas);
  }, [isOpen]);

  useEffect(() => {
    if (toastMsg !== "") {
      const interval = setInterval(() => {
        setToastMsg("");
        clearInterval(interval);
      }, 1000);
    }
  }, [toastMsg]);

  const {
    image,
    description,
    duration,
    endDate,
    episodes,
    score,
    popularity,
    source,
    startDate,
    status,
    title,
    genres,
    animeId,
  } = props;

  return (
    <Container>
      {toastMsg !== "" && <Toast>{toastMsg}</Toast>}
      <Card>
        <CardLeft>
          <img src={image} alt="" />
          <StyledTable>
            <tbody>
              <tr>
                <StyledTdHead>Duration</StyledTdHead>
                <StyledTd>{duration}</StyledTd>
              </tr>
              <tr>
                <StyledTdHead>Episodes</StyledTdHead>
                <StyledTd>{episodes}</StyledTd>
              </tr>
              <tr>
                <StyledTdHead>Status</StyledTdHead>
                <StyledTd>{status}</StyledTd>
              </tr>
              <tr>
                <StyledTdHead>Aired</StyledTdHead>
                <StyledTd>
                  {Moment(
                    `${startDate.year}-${startDate.month}-${startDate.day}`
                  ).format("MMM Do, YYYY")}
                  {endDate
                    ? ` to ${Moment(
                        `${endDate.year}-${endDate.month}-${endDate.day}`
                      ).format("MMM Do, YYYY")}`
                    : ""}
                </StyledTd>
              </tr>
              <tr>
                <StyledTdHead>Source</StyledTdHead>
                <StyledTd>{source}</StyledTd>
              </tr>
              <tr>
                <StyledTdHead>Genre</StyledTdHead>
                <StyledTd>
                  {genres.map((item, idx) => {
                    if (idx === 0) return `${item}`;
                    return `, ${item}`;
                  })}
                </StyledTd>
              </tr>
            </tbody>
          </StyledTable>
        </CardLeft>
        <CardRight>
          <TitleWrapper>
            <div className="title-jp">
              <Title>
                {title.romaji}
                {title.native ? ` / ${title.native}` : ""}
              </Title>
            </div>
            <div className="title-en">
              <SecondaryTitle>{title.english}</SecondaryTitle>
            </div>
          </TitleWrapper>
          <Rank css={mb_10}>
            <RankInfo css={mr_20}>
              <RITitle>Score</RITitle>
              <RIValue>{score / 10}</RIValue>
            </RankInfo>
            <RankInfo>
              <RITitle>Popularity</RITitle>
              <RIValue>#{popularity}</RIValue>
            </RankInfo>
          </Rank>
          <div className="synopsis" css={mb_10}>
            <StyledLabel>Synopsis</StyledLabel>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className="saved-collection">
            <Label>Save to My Collections</Label>
            <CollectionWrapper>
              {Object.keys(collections).map(
                (name, idx) =>
                  collections[name].indexOf(animeId) > -1 && (
                    <NavLink to={`/collection/${name}`} key={idx}>
                      <Chip>{name}</Chip>
                    </NavLink>
                  )
              )}
              <Button
                leftIcon={true}
                icon={<RiAddLine />}
                onClick={() => {
                  setIsOpen(true);
                }}
                css={addBtnStyle}
              />
            </CollectionWrapper>
          </div>
        </CardRight>
      </Card>
      {isOpen && (
        <AddToCollectionModal
          animeId={animeId}
          setIsOpen={setIsOpen}
          setToastMsg={setToastMsg}
        />
      )}
    </Container>
  );
};

export default DetailView;
