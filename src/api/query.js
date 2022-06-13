import { gql } from "@apollo/client";

export const QUERY_PAGINATION = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
        id
        title {
          romaji,
          english
        }
        coverImage {
          large
          extraLarge
        }
        episodes
        duration
      }
    }
  }
`;

export const QUERY = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      coverImage {
        large
      }
      description
      duration
      endDate {
        year
        month
        day
      }
      episodes
      genres
      meanScore
      popularity
      startDate {
        year
        month
        day
      }
      status
      source
      title {
        romaji
        english
        native
      }
      type
    }
  }
`;
