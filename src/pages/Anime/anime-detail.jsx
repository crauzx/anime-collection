import { useQuery } from "@apollo/client";
import { QUERY } from "../../api/query";
import { useParams } from "react-router-dom";
import DetailView from "../../components/Card/DetailCardView";

const AnimeDetail = () => {
  const params = useParams();
  const variables = {
    id: parseInt(params.id, 10),
  };

  const { data } = useQuery(QUERY, {
    variables: variables,
  });

  return (
    <>
      {data && (
        <DetailView
          image={data.Media.coverImage.large}
          description={data.Media.description}
          duration={data.Media.duration}
          endDate={data.Media.endDate}
          episodes={data.Media.episodes}
          score={data.Media.meanScore}
          popularity={data.Media.popularity}
          source={data.Media.source}
          startDate={data.Media.startDate}
          status={data.Media.status}
          title={data.Media.title}
          genres={data.Media.genres}
          animeId={params.id}
        />
      )}
    </>
  );
};

export default AnimeDetail;
